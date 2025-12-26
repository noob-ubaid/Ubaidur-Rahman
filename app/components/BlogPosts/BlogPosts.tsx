"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}
const BlogPosts = ({ post, index }: { post: BlogPostMeta; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.3, delay: 0.06 * index }}
      viewport={{ once: true }}
      className="p-1 mt-5 rounded-md"
    >
      <Link href={`/blogs/${post.slug}`}>
        <div className="flex sm:items-center flex-col mb-2 sm:flex-row gap-1 sm:justify-between">
          <h4 className="text-lg font-bold ">{post.title}</h4>
          <p className="font-medium text-text-color">{post.date}</p>
        </div>
        <p className="text-text-color mt-3">{post.description}</p>
      </Link>
    </motion.div>
  );
};

export default BlogPosts;
