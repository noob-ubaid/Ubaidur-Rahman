import Skills from "@/app/components/techStack/Skills";
import { getSnippetBySlug } from "@/lib/getSnippets";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export default async function SnippetDetail({ params }: Props) {
    const { slug } = await params;
  const { content, data } = getSnippetBySlug(slug);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold">
        {data.title}
      </h1>
      <p className="text-gray-600 mb-6">
        {data.description}
      </p>

      <MDXRemote
        source={content}
        components={{
          Skills,
        }}
      />
    </div>
  );
}
