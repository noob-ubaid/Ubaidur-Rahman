import GithubActivity from "../github/GithubActivity";
import Title from "../shared/Title";
import Image from "next/image";
import Skills from "../techStack/Skills";
const AboutMe = () => {
  return (
    <div className="">
      <Title text={"About Me"} />
      <div className="grid grid-cols-10 mt-14 gap-6 sm:gap-4">
        <div className="col-span-10 sm:col-span-4 relative w-full h-80 sm:h-72">
          <Image
            src={"/aboutme.jpg"}
            alt="profile"
            fill
            className="object-cover  bg-top rounded-md"
          />
        </div>
        <div className="col-span-10 sm:col-span-6 space-y-3">
          <h4 className="text-3xl font-bold">Md. Ubaidur Rahman</h4>
          <p className="font-medium text-text-color">
            A detail-oriented full-stack developer specializing in the MERN
            ecosystem. I bring ideas to elegant UI, optimized APIs and
            performance. I’m always experimenting, learning, and pushing myself
            to build better solutions.From front-end experience to backend
            logic, I love crafting products that feel intuitive, responsive, and
            polished.
          </p>
          <Skills />
        </div>
      </div>
      <GithubActivity />
    </div>
  );
};

export default AboutMe;
