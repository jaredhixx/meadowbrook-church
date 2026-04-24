import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.meadowbrookcc.org",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.meadowbrookcc.org/visit",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/connect",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/leadership",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/beliefs",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.meadowbrookcc.org/contact",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://www.meadowbrookcc.org/give",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // VIDEO SYSTEM (NEW — HIGH ROI)
    {
      url: "https://www.meadowbrookcc.org/videos",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/videos/sermons",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/videos/sermons/old-testament-slavery",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.meadowbrookcc.org/videos/doctrine",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.meadowbrookcc.org/videos/social-issues",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}