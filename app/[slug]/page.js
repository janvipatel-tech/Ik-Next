import { notFound } from "next/navigation";
import { getPageBySlug, getAllPageSlugs } from "@/lib/strapi";
import Talent500Template from "@/components/talent500/Template";

// Registry of templates -> renderer. Add more templates here later.
const TEMPLATES = {
  "talent-500": Talent500Template,
};

export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const page = await getPageBySlug(params.slug);
  if (!page) return { title: "Page not found" };

  const seo = page.seo || {};
  return {
    title: seo.metaTitle || page.title,
    description: seo.metaDescription || undefined,
    keywords: seo.keywords || undefined,
    alternates: seo.canonicalURL ? { canonical: seo.canonicalURL } : undefined,
    openGraph: {
      title: seo.metaTitle || page.title,
      description: seo.metaDescription || undefined,
      images: seo.metaImageUrl ? [{ url: seo.metaImageUrl }] : undefined,
    },
  };
}

export default async function DynamicPage({ params }) {
  const page = await getPageBySlug(params.slug);
  if (!page) notFound();

  const Template = TEMPLATES[page.template] || TEMPLATES["talent-500"];
  return <Template page={page} />;
}
