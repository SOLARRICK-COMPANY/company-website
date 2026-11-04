import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/solutions", "/work", "/insights", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];

  const baseUrl = new URL(siteUrl);
  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
  }));
}
