import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SNIPPETS_PATH = path.join(process.cwd(), "snippets");

export function getAllSnippets() {
  const files = fs.readdirSync(SNIPPETS_PATH);

  return files.map(file => {
    const source = fs.readFileSync(
      path.join(SNIPPETS_PATH, file),
      "utf8"
    );

    const { data } = matter(source);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title as string,
      description: data.description as string,
    };
  });
}

export function getSnippetBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(SNIPPETS_PATH, `${slug}.mdx`),
    "utf8"
  );

  return matter(source);
}
