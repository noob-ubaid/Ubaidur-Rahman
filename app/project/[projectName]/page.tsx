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
      <Link
        href={"/"}
        className="px-6 flex w-fit font-medium items-center gap-3 py-2 border-2 rounded-md text-text-color"
      >
        <RiArrowGoBackFill size={20} />
        Back to portfolio
      </Link>
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
      <div className="border-2 p-3 sm:p-4 flex items-center rounded-md mt-6 flex-wrap gap-3">
        {project.techStack.map((tech, idx) => (
          <span className="px-3 py-1 rounded-full border" key={idx}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default Project;
