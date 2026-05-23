import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project-case-study";
import { caseStudyProjects, getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} Case Study | Ahmed Basuony`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.shortDescription,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} Case Study`,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
