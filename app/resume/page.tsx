import { Metadata } from "next";
import { resumeConfig } from "../config/resume";
import Title from "../components/shared/Title";

export const metadata: Metadata = {
  title: "Resume | Md. Ubaidur Rahman",
  description: "Resume of Md. Ubaidur Rahman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function ResumePage() {
  return (
    <div className="pb-14">
      {/* Title */}
      <div className="border-b-2 pb-5 text-center">
        <Title text="Resume of Md. Ubaidur Rahman" />
        <p className=" text-center text-text-color mt-6">
          A concise summary of my technical skills, experience, and projects as
          a web developer. This resume reflects my journey, capabilities, and
          the value I bring as a MERN Stack Developer.
        </p>
      </div>
      {/* Embedded Resume */}
      <div className="mt-8">
        <iframe
          src={resumeConfig.url}
          className="w-full sm:min-h-screen h-[530px] border rounded-md"
        ></iframe>
      </div>
    </div>
  );
}
