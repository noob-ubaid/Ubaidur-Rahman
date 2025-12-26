import { getBlogs } from "@/lib/getBlogs";
import Title from "../shared/Title";
import BlogPosts from "../BlogPosts/BlogPosts";
import ButtonLink from "../shared/ButtonLink";
export default function FeaturedBlogs() {
  const blogs = getBlogs().slice(0, 3);

  return (
    <section className="mt-10">
      <Title upperText="Featured" lowerText="Blogs" />
      <div className="mt-8">
        {blogs.map((post, index) => (
          <BlogPosts key={index} index={index} post={post} />
        ))}
      </div>
      <ButtonLink />
    </section>
  );
}
