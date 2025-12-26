import { getSnippetBySlug } from "@/lib/getSnippets";
import { mdxToHtml } from "@/lib/mdxToHtml";
import { notFound } from "next/navigation";
import Skills from "@/app/components/techStack/Skills";

type Props = {
  params: { slug: string };
};

export default async function SnippetDetail({ params }: Props) {
  const { slug } = await params;
  const snippet = getSnippetBySlug(slug);

  if (!snippet) return notFound();

  const { content, data } = snippet;
  const htmlContent = await mdxToHtml(content);

  return (
    <main className="mt-14 max-w-6xl mx-auto px-6">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          {data.title}
        </h1>
        <p className="text-muted-foreground text-lg">
          {data.description}
        </p>
      </header>

      {/* Preview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Preview
        </h2>
        <div className="border rounded-xl p-6 bg-background">
          <Skills />
        </div>
      </section>

      {/* Code / Content */}
      <article
        className="
          prose prose-gray
          dark:prose-invert
          max-w-none
        "
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}
