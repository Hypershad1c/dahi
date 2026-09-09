import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.benslimane-province.ma/sitemap.xml",
    host: "https://www.benslimane-province.ma",
  };
}
