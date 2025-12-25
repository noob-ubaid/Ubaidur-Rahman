import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import Link from "next/link";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const filePath = `content/${slug}.md`;
  if (!fs.existsSync(filePath)) {
    return notFound();
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();
  return (
    <main className="mt-14">
      <div className="mb-8">
        <Link
          className="border-2 rounded-md px-5 py-2 font-medium "
          href={`/blogs`}
        >
          Back to blogs page
        </Link>
      </div>
      <article>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert max-w-none w-full"
        ></div>
      </article>
    </main>
  );
};

export default Page;
