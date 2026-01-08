import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import FeaturedBlogs from "./components/FeaturedBlogs/FeaturedBlogs";
import Hero from "./components/Hero/Hero";
import GithubActivity from "./components/github/GithubActivity";
import Certificate from "./components/FeaturedCertificate/Certificate";

export default function Home() {
  return (
    <div className=" space-y-6">
      <Hero />
      <Projects />
      <AboutMe />
      <GithubActivity />
      <FeaturedBlogs />
      <Certificate/>
    </div>
  );
}
