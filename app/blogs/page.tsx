import React from "react";
import BlogPosts from "../components/BlogPosts/BlogPosts";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const BlogsPage = () => {
  return (
    <div className="mt-14">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Blogs</h2>
        <p className="pb-5 border-b-2 text-center text-text-color mt-6">
          Thoughts, tutorials, and experiences from my journey as a full-stack
          web developer. I share what I learn while building real-world
          projects.
        </p>
      </div>
      <div className="mt-8">
        {blogs.map((post, index) => (
          <BlogPosts key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
