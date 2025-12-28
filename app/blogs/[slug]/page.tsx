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
import OnThisPage from "@/app/components/OnThisPage/OnThisPage";
import { RiArrowGoBackFill } from "react-icons/ri";

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
    <main className="">
      <div className="mb-8">
        <OnThisPage htmlContent={htmlContent} />
        <Link className="btn-design" href={`/blogs`}>
          <RiArrowGoBackFill size={20} />
          Back to blogs page
        </Link>
      </div>
      <article>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="  prose prose-gray prose-p:text-text-color prose-li:text-muted-foreground prose-h1:text-[27px] sm:prose-h1:text-[32px] prose-strong:text-foreground dark:prose-invert max-w-none w-full"
        ></div>
      </article>
    </main>
  );
};

export default Page;
