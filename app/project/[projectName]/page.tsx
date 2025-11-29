"use client";
import { allProjects } from "@/app/components/projects/Projects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { TbBrandGithub, TbServer, TbWorld } from "react-icons/tb";
const Project = () => {
  const params = useParams();
  const { projectName } = params;
  const project = allProjects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectName
  );
  if (!project) return <p>Project not found</p>;
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <Link
          href={"/"}
          className="px-3 sm:px-6 flex w-fit font-medium items-center gap-1 sm:gap-3 py-2 border-2 rounded-md text-text-color"
        >
          <RiArrowGoBackFill size={20} />
          Back to portfolio
        </Link>
        {project.teamProject && (
          <div className="px-3 sm:px-6 font-medium text-text-color rounded-md border-2 py-2">
            Team Project
          </div>
        )}
      </div>
      <div className="w-full relative h-96 border-2 mt-8 rounded-md">
        <Image
          className="object-cover rounded-md bg-center "
          src={project.img}
          alt={project.name}
          fill
        />
      </div>
      <div className="mt-6 pb-6 border-b-2 space-y-6 ">
        <h4 className="text-3xl sm:text-4xl font-bold ">{project.name}</h4>
        <p className=" text-text-color font-medium text-lg">
          {project.description}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 p-5 border-2 gap-8 rounded-md items-center">
          {project.status.map((item) => (
            <div key={item.id}>
              <p className="text-text-color font-medium">{item.name}</p>
              <p className="font-medium text-sm mt-1">{item.duration}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={project.liveLink}
            className="flex items-center gap-1 w-fit border-2 px-3 py-2 rounded-md"
          >
            <TbWorld size={18} /> Live Link
          </a>
          <a
            href={project.clientLink}
            className="flex items-center gap-1 w-fit border-2 px-3 py-2 rounded-md"
          >
            <TbBrandGithub size={18} /> Client
          </a>
          <a
            href={project.serverLink}
            className="flex items-center gap-1 w-fit border-2 px-3 py-2 rounded-md"
          >
            <TbBrandGithub size={18} /> Server
          </a>
        </div>
      </div>
      <div className="border-2 p-4 rounded-md mt-6">
        <h4 className=" font-semibold mb-3">Tech Stack</h4>
        <div className=" flex items-center  flex-wrap gap-2 sm:gap-3">
          {project.techStack.map((tech, idx) => (
            <span
              className="px-3 py-1 font-medium text-sm rounded-full border-2 "
              key={idx}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-stretch mt-6 md:flex-row gap-6">
        {/* keyChallenges */}
        <div className="border-2 border-yellow-500 bg-yellow-50 dark:bg-transparent w-full p-4 rounded-md flex-1">
          <h4 className="text-yellow-500 text-2xl mb-4 font-semibold">
            Key Challenges
          </h4>
          {project.keyChallenges.map((challenge, idx) => (
            <li
              className="ml-4 mt-2 text-sm text-yellow-500 font-medium"
              key={idx}
            >
              {challenge}
            </li>
          ))}
        </div>
        <div className="border-2 border-green-500 p-4 bg-green-50 dark:bg-transparent w-full rounded-md flex-1">
          <h4 className="text-green-500 text-2xl mb-4 font-semibold">
            Key Learnings
          </h4>
          {project.keyLearnings.map((challenge, idx) => (
            <li
              className="ml-4 mt-2 text-sm text-green-500 font-medium"
              key={idx}
            >
              {challenge}
            </li>
          ))}
        </div>
      </div>
      <div className="mt-6 border-2 rounded-md p-4">
        <h4 className=" text-2xl mb-4 font-semibold">Key Features</h4>
        {project.features.map((feature, idx) => (
          <li className="ml-4 mt-1.5 text-sm font-medium" key={idx}>
            {feature}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Project;
