import { notFound } from "next/navigation";
import { getAllSlugs, getProjectBySlug } from "@/lib/projects";
import ProjectDetailClient from "./project-detail-client";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
