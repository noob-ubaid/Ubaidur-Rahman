import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      tags: matterResult.data.tags,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: matterResult.data.slug,
    };
  });
  return posts;
}
