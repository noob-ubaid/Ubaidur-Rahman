import getPostMetadata from "@/lib/getPostMetaData";
import React from "react";
import BlogPosts from "../components/BlogPosts/BlogPosts";

const BlogsPage = () => {
  const displayPosts = getPostMetadata("content");
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
        {displayPosts.map((post, index) => (
          <BlogPosts key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
