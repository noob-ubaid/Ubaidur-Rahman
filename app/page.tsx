import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import FeaturedBlogs from "./components/FeaturedBlogs/FeaturedBlogs";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className=" space-y-6">
      <Hero/>
      <Projects />
      <AboutMe />
      <FeaturedBlogs />
    </div>
  );
}
