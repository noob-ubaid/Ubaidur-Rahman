import React from "react";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import fs from "fs";
import matter from "gray-matter";
import type { BlogPostMeta } from "../components/BlogPosts/BlogPosts";
import BlogsHeader from "../components/BlogsHeader/BlogsHeader";

const dirContent = fs.readdirSync("content", "utf-8");
export const blogs: BlogPostMeta[] = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data as BlogPostMeta;
});

const BlogsPage = () => {
  return (
    <div className="">
      <BlogsHeader />
      <div className="mt-8">
        {blogs.map((post, index) => (
          <BlogPosts key={index} index={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
