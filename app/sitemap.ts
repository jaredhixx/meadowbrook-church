import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.meadowbrookcc.org",
      lastModified: new Date(),
    },
    {
      url: "https://www.meadowbrookcc.org/visit",
      lastModified: new Date(),
    },
    {
      url: "https://www.meadowbrookcc.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.meadowbrookcc.org/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.meadowbrookcc.org/give",
      lastModified: new Date(),
    },
  ];
}