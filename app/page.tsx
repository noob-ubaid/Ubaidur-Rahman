import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import FeaturedBlogs from "./components/FeaturedBlogs/FeaturedBlogs";
import Hero from "./components/Hero/Hero";
import GithubActivity from "./components/github/GithubActivity";
import Certificate from "./components/FeaturedCertificate/Certificate";
import MoreAboutMe from "./components/MoreAboutMe/MoreAboutMe";
import ChatWithMe from "./components/ChatWithMe/ChatWithMe";

export default function Home() {
  return (
    <div className=" space-y-6">
      <Hero />
      <Projects />
      <AboutMe />
      <MoreAboutMe/>
      <GithubActivity />
      <FeaturedBlogs />
      <ChatWithMe/>
      <Certificate/>
    </div>
  );
}
