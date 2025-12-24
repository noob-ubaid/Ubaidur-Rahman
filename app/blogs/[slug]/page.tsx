import React from "react";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

const Page = async({ params }: { params: { slug: string } }) => {
  const { slug } = await params 
  const filePath = `content/${slug}.md`
  if(!fs.existsSync(filePath)) {
    return notFound()
  }
  const fileContent = fs.readFileSync(filePath,"utf-8")
  const {content,data} = matter(fileContent)
  return (
    <main className="mt-14">
      <article>
        <h4 className="text-2xl font-semibold">{data.title}</h4>
        <p className="mt-4 text-text-color">{data.description}</p>
      </article>
    </main>
  );
};

export default Page;
