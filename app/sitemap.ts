import { MetadataRoute } from "next";
import { caseStudyProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-basuony.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = caseStudyProjects.map(
    (project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
