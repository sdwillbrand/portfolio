import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sdwillbrand.com",
    },
    {
      url: "https://sdwillbrand.com/impressum",
    },
    {
      url: "https://sdwillbrand.com/datenschutz",
    },
    {
      url: "https://sdwillbrand.com/kontakt",
    },
  ];
}
