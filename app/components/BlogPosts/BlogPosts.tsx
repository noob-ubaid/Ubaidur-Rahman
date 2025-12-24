import Link from "next/link";
import React from "react";
export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}
const BlogPosts = ({ post }: { post: BlogPostMeta }) => {
  return (
    <div className=" p-1 mt-3 rounded-md">
      <Link href={`/blogs/${post.slug}`}>
        <div className="flex sm:items-center flex-col mb-2 sm:flex-row gap-1 sm:justify-between">
          <h4 className="text-lg font-bold ">{post.title}</h4>
          <p className="font-medium text-text-color">{post.date}</p>
        </div>
        <p className="text-text-color mt-2">{post.description}</p>
      </Link>
    </div>
  );
};

export default BlogPosts;
