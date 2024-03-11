import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sdwillbrand.com",
    },
    {
      url: "https://sdwillbrand.com/blog",
    },
  ];
}
