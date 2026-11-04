import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const noStore = { "Cache-Control": "no-store" };

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Request origin is not allowed." }, { status: 403, headers: noStore });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return NextResponse.json({ error: "The enquiry is too large." }, { status: 413, headers: noStore });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Expected a JSON request." }, { status: 415, headers: noStore });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "The enquiry could not be read." }, { status: 400, headers: noStore });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the enquiry fields and try again." }, { status: 400, headers: noStore });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const rateLimitSecret = process.env.RATE_LIMIT_SECRET;
  if (!supabaseUrl || !serviceRoleKey || !rateLimitSecret) {
    return NextResponse.json(
      { error: "Enquiry submissions are not available yet. The site administrator must configure the secure enquiry service." },
      { status: 503, headers: noStore },
    );
  }

  const enquiry = parsed.data;
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientAddress = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const requestKey = createHash("sha256")
      .update(`${rateLimitSecret}:${clientAddress}`)
      .digest("hex");
    const rateLimitResponse = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/rpc/consume_contact_submission_rate_limit`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_request_key: requestKey }),
      cache: "no-store",
    });

    if (!rateLimitResponse.ok) {
      console.error("Contact enquiry rate limit check failed with status:", rateLimitResponse.status);
      return NextResponse.json({ error: "We could not process your enquiry. Please try again later." }, { status: 502, headers: noStore });
    }

    const withinRateLimit: unknown = await rateLimitResponse.json();
    if (withinRateLimit !== true) {
      return NextResponse.json(
        { error: "Too many enquiries were sent from this connection. Please wait 15 minutes and try again." },
        { status: 429, headers: { ...noStore, "Retry-After": "900" } },
      );
    }

    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        full_name: enquiry.fullName,
        organization: enquiry.organization,
        email: enquiry.email,
        phone: enquiry.phone,
        service: enquiry.service,
        budget_range: enquiry.budget || null,
        project_description: enquiry.projectDescription,
        preferred_contact_method: enquiry.preferredContactMethod,
        privacy_consent: enquiry.privacyConsent,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact enquiry persistence failed with status:", response.status);
      return NextResponse.json({ error: "We could not save your enquiry. Please try again later." }, { status: 502, headers: noStore });
    }

    return NextResponse.json({ success: true, message: "Your enquiry has been received securely." }, { status: 201, headers: noStore });
  } catch (error) {
    console.error("Contact enquiry request failed:", error);
    return NextResponse.json({ error: "We could not save your enquiry. Please try again later." }, { status: 502, headers: noStore });
  }
}
