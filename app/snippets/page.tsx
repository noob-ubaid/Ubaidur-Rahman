import { getAllSnippets } from "@/lib/getSnippets";
import Link from "next/link";

export default function SnippetsPage() {
  const snippets = getAllSnippets();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Code Snippets</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {snippets.map(snippet => (
          <Link
            key={snippet.slug}
            href={`/snippets/${snippet.slug}`}
            className="border rounded-lg p-4 hover:shadow transition"
          >
            <h2 className="text-xl font-semibold">
              {snippet.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {snippet.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
