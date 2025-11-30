import Title from "../shared/Title";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
const AboutMe = () => {
  return (
    <div className="mt-16">
      <Title text={"About Me"} />
      <div className="grid grid-cols-10 mt-14 gap-6">
        <div className="col-span-10 sm:col-span-4 relative w-full h-80 sm:h-72">
          <Image
            src={"/aboutme.jpg"}
            alt="profile"
            fill
            className="object-cover  bg-top rounded-md"
          />
        </div>
        <div className="col-span-10 sm:col-span-6 space-y-6">
          <h4 className="text-3xl font-bold">Md. Ubaidur Rahman</h4>
          <p className="font-semibold text-text-color">
            I’m a passionate Full Stack Developer with a focus on building
            clean, responsive web applications. I love turning ideas into
            real-world projects and continuously sharpening my skills to create
            user-friendly digital experiences.
          </p>
          <p className="font-semibold text-text-color">Skills</p>
        </div>
      </div>
      <div className="p-4 rounded-md border-2">
        <GitHubCalendar
          username="noob-ubaid"
          colorScheme="light"
          showMonthLabels={true}
          fontSize={15}
          blockSize={10}
          blockMargin={2}
        />
      </div>
    </div>
  );
};

export default AboutMe;
