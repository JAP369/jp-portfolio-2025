import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Case Study`,
    description: cs.tagline,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  return <CaseStudyClient caseStudy={cs} />;
}
