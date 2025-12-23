import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
const BlogPosts = ({ post }) => {
  return (
    <div className="border-2 p-3 rounded-md">
      <Link href={`/blogs/${post.slug}`}>
        <h4 className="text-xl mb-2 font-semibold ">{post.title}</h4>
        <p>{post.date}</p>
        <p className="text-text-color mt-2">{post.description}</p>
         <div className="flex items-center gap-2 justify-end mt-2 w-full">
          <p className="text-text-color flex items-center gap-1 text-right hover:underline">
            <span>Read more</span> <GoArrowRight size={16} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPosts;
