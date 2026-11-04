import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-layout";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "SolarRick Technologies | Engineering Solutions Around Problems That Matter",
    template: "%s | SolarRick Technologies",
  },
  description:
    "SolarRick Technologies designs secure, practical, scalable software solutions for businesses and organizations across Kenya, Africa and beyond.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: {
    type: "website",
    siteName: "SolarRick Technologies",
    title: "SolarRick Technologies | Ideas. Software. Next.",
    description:
      "We don't just build software. We engineer solutions around problems that matter.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F5F8FC] text-slate-900 antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
