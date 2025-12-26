import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import { transformerCopyButton } from "@rehype-pretty/transformers";

export async function mdxToHtml(content: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "Snippet" })
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(
      rehypePrettyCode,
      {
        theme: "github-dark",
        transformers: [
          transformerCopyButton({
            visibility: "always",
            feedbackDuration: 3000,
          }),
        ],
      }
    )
    .use(rehypeStringify);

  return (await processor.process(content)).toString();
}
