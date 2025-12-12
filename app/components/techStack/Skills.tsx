"use client";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import NextjsIcon from "@/components/svgs/Next";
import JavaScript from "@/components/svgs/JavaScript";
import TypeScript from "@/components/svgs/TypeScript";
import React from "@/components/svgs/React";
import Expressjs from "@/components/svgs/Express";
import MongoDB from "@/components/svgs/MongoDB";
import PostgreSQL from "@/components/svgs/PostgreSql";
import Nodejs from "@/components/svgs/Node";
import TailwindCSS from "@/components/svgs/TailwindCss";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  { name: "JavaScript", icon: <JavaScript className="size-4 sm:size-5" /> },
  { name: "TypeScript", icon: <TypeScript className="size-4 sm:size-5" /> },
  { name: "Tailwind CSS", icon: <TailwindCSS className="size-4 sm:size-5" /> },
  { name: "React ", icon: <React className="size-4 sm:size-5" /> },
  { name: "Next.js", icon: <NextjsIcon className="size-4 sm:size-5" /> },
  { name: "Node.js", icon: <Nodejs className="size-4 sm:size-5" /> },
  { name: "Express.js", icon: <Expressjs className="size-4 sm:size-5" /> },
  { name: "MongoDB", icon: <MongoDB className="size-4 sm:size-5" /> },
  { name: "PostgreSQL", icon: <PostgreSQL className="size-4 sm:size-5" /> },
];

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <p className="font-semibold text-text-color">Core Skills</p>

      <div className="flex items-center gap-1 mt-2">
        {skills.map((skill, index) => {
          const isHovered = hovered === index;
          return (
            <motion.div
              key={index}
              layout
              className="border px-1.5 py-1 sm:px-1.5 sm:py-1.5 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{ opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <span className={isHovered ? "mr-1" : undefined}>
                {skill.icon}
              </span>

              <motion.span
                initial={{ width: 0, opacity: 0 }}
                className="text-xs sm:text-sm font-medium whitespace-nowrap"
                animate={{
                  width: isHovered ? "auto" : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
