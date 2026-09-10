import type { MetadataRoute } from "next";

const baseUrl = "https://www.benslimane-province.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-10");
  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/legal`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
