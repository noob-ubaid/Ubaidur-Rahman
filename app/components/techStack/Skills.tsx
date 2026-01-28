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
import Prisma from "@/components/svgs/Prisma";
import TanStack from "@/components/svgs/TanstackQuery";
import Redux from "@/components/svgs/Redux";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  { name: "JavaScript", icon: <JavaScript className="size-4 sm:size-5" /> },
  { name: "TypeScript", icon: <TypeScript className="size-4 sm:size-5" /> },
  { name: "React ", icon: <React className="size-4 sm:size-5" /> },
  { name: "Next.js", icon: <NextjsIcon className="size-4 sm:size-5" /> },
  { name: "Tanstack Query", icon: <TanStack className="size-4 sm:size-5" /> },
  { name: "Redux", icon: <Redux className="size-4 sm:size-5" /> },
  { name: "Prisma", icon: <Prisma className="size-4 sm:size-5" /> },
  { name: "Express.js", icon: <Expressjs className="size-4 sm:size-5" /> },
  { name: "MongoDB", icon: <MongoDB className="size-4 sm:size-5" /> },
  { name: "PostgreSQL", icon: <PostgreSQL className="size-4 sm:size-5" /> },
];

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      <p className="font-medium text-text-color">Tech Stack</p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center -space-x-1.5 mt-1"
      >
        {skills.map((skill, index) => {
          const isHovered = hovered === index;
          return (
            <motion.div
              className="border dark:border-neutral-700 p-1.5 rounded-full flex bg-white dark:bg-black items-center justify-center cursor-pointer overflow-hidden"
              layout
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{ opacity: isHovered ? 1 : 0.9 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <span className={isHovered ? "sm:mr-1 mr-0.5" : undefined}>
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
      </motion.div>
    </div>
  );
}
