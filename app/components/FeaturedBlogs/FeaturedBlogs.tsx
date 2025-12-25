import fs from "fs";
import matter from "gray-matter";
import type { BlogPostMeta } from "../BlogPosts/BlogPosts";
const dirContent = fs.readdirSync("content", "utf-8");

  const blogs: BlogPostMeta[] = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data as BlogPostMeta;
  });

export default function FeaturedBlogs() {
  
  return (
    <div>
      {blogs.slice(0, 3).map((blog) => (
        <div key={blog.slug}>{blog.title}</div>
      ))}
    </div>
  );
}
