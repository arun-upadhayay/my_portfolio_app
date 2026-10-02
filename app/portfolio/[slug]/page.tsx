import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getProjectBySlug } from "@/lib/projects";
import ProjectDetailClient from "./project-detail-client";

const siteUrl = "https://arunupadhayay.in";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const description = project.description;
  return {
    title: { absolute: `${project.title} | Arun Upadhayay` },
    description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | Arun Upadhayay`,
      description,
      url: `${siteUrl}/portfolio/${project.slug}`,
      type: "article",
      images: [{ url: project.screenshots[0] || "/assets/about.jpg", alt: `${project.title} project preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Arun Upadhayay`,
      description,
      images: [project.screenshots[0] || "/assets/about.jpg"],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/#portfolio` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteUrl}/portfolio/${project.slug}` },
    ],
  };
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteUrl}/portfolio/${project.slug}`,
    creator: { "@type": "Person", name: "Arun Upadhayay", url: siteUrl },
    image: project.screenshots.length ? project.screenshots.map((image) => `${siteUrl}${image}`) : undefined,
    keywords: project.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }} />
      <ProjectDetailClient project={project} />
    </>
  );
}
