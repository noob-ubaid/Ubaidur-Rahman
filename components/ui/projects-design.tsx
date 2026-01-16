"use client";
import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
} from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GoArrowRight } from "react-icons/go";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Project } from "@/app/components/projects/Projects";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";
const iconMap = {
  project: CodeXmlIcon,
} as const;

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: Project[];
}) {
  return (
    <div className={cn("bg-background mt-6", className)}>
      {experiences.map((project, index) => (
        <ExperienceItem key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export function ExperienceItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className="space-y-4 py-4"
      initial={{ opacity: 0,  scale:0.8 }}
      whileInView={{ opacity: 1, scale:1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.05 }}
    >
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <ExperiencePositionItem project={project} />
      </div>
    </motion.div>
  );
}

export function ExperiencePositionItem({ project }: { project: Project }) {
  const ExperienceIcon = iconMap["project"];

  return (
    <Collapsible defaultOpen={false} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "group/experience not-prose block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/50"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            {/* Icon */}
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <ExperienceIcon className="size-4" />
            </div>

            {/* Title */}
            <h4 className="flex-1 text-base font-medium text-foreground">
              {project.name}
            </h4>

            {/* View Details */}
            <Link
              href={`project/${project.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View details
              <GoArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            {/* Live link */}
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <BiWorld size={18} />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-medium">Live Link</p>
              </TooltipContent>
            </Tooltip>

            {/* Expand icon */}
            <div className="text-muted-foreground [&_svg]:size-4">
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
            </div>
          </div>

          {/* Meta */}
          <div className="relative z-1 flex items-center gap-3 pl-9 text-sm text-muted-foreground">
            <span className="font-medium pr-3 border-r-2">
              {project.projectType}
            </span>
            <span className="font-medium">
              {project.teamProject ? "Team Project" : "Solo Project"}
            </span>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <Prose className="pt-2 pl-9">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </Prose>

          <h3 className="pl-9 pt-3 font-semibold">Tech Stack</h3>
          <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
            {project.techStack.map((skill, index) => (
              <li key={index}>
                <Skill>{skill}</Skill>
              </li>
            ))}
          </ul>

          <h3 className="pl-9 pt-3 font-semibold">Features</h3>
          <ul className="list-disc pl-14 space-y-1 mt-3 text-sm text-muted-foreground">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none mt-2 font-medium text-foreground dark:prose-invert",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
