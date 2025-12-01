// import {
//   BriefcaseBusinessIcon,
//   ChevronsDownUpIcon,
//   ChevronsUpDownIcon,
//   CodeXmlIcon,
//   DraftingCompassIcon,
//   GraduationCapIcon,
// } from "lucide-react";
// import Image from "next/image";
// import React from "react";
// import ReactMarkdown from "react-markdown";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { Separator } from "@/components/ui/separator";
// import { cn } from "@/lib/utils";
// import { Project } from "@/app/components/projects/Projects";

// const iconMap = {
//   code: CodeXmlIcon,
//   design: DraftingCompassIcon,
//   business: BriefcaseBusinessIcon,
//   education: GraduationCapIcon,
// } as const;

// /**
//  * Represents the valid keys of the `iconMap` object, used to specify the type of icon
//  * associated with an experience position.
//  */
// export type ExperiencePositionIconType = keyof typeof iconMap;

// export type ExperiencePositionItemType = {
//   /** Unique identifier for the position */
//   id: string;
//   /** The job title or position name */
//   title: string;
//   /** The period during which the position was held (e.g., "Jan 2020 - Dec 2021") */
//   employmentPeriod: string;
//   /** The type of employment (e.g., "Full-time", "Part-time", "Contract") */
//   employmentType?: string;
//   /** A brief description of the position or responsibilities */
//   description?: string;
//   /** An icon representing the position */
//   icon?: ExperiencePositionIconType;
//   /** A list of skills associated with the position */
//   skills?: string[];
//   /** Indicates if the position details are expanded in the UI */
//   isExpanded?: boolean;
// };

// export type ExperienceItemType = {
//   /** Unique identifier for the experience item */
//   id: string;
//   /** Name of the company where the experience was gained */
//   companyName: string;
//   /** URL or path to the company's logo image */
//   companyLogo?: string;
//   /** List of positions held at the company */
//   positions: ExperiencePositionItemType[];
//   /** Indicates if this is the user's current employer */
//   isCurrentEmployer?: boolean;
// };

// export function WorkExperience({
//   className,
//   experiences,
// }: {
//   className?: string;
//   experiences: Project[];
// }) {
//   return (
//     <div className={cn("bg-background px-4", className)}>
//       {/* {experiences.map((experience) => (
//         <ExperienceItem key={experience.id} experience={experiences} />
//       ))} */}
//       {
//         experiences.map(project => (
//           <ExperienceItem key={project.id} experience={project} />
//         ))
//       }
//     </div>
//   );
// }

// export function ExperienceItem({ experience }: { experience: Project[] }) {
//   return (
//     <div className="space-y-4 py-4">
//       <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
//         {experience.map((position) => (
//           <ExperiencePositionItem key={position.id} position={position} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export function ExperiencePositionItem({
//   position,
// }: {
//   position: ExperiencePositionItemType;
// }) {
//   const ExperienceIcon = iconMap[position.icon || "business"];

//   return (
//     <Collapsible defaultOpen={position.isExpanded} asChild>
//       <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
//         <CollapsibleTrigger
//           className={cn(
//             "group/experience not-prose block w-full text-left select-none",
//             "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/50"
//           )}
//         >
//           <div className="relative z-1 mb-1 flex items-center gap-3">
//             <div
//               className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
//               aria-hidden
//             >
//               <ExperienceIcon className="size-4" />
//             </div>

//             <h4 className="flex-1 text-base font-medium text-balance text-foreground">
//               {position.title}
//             </h4>

//             <div
//               className="shrink-0 text-muted-foreground [&_svg]:size-4"
//               aria-hidden
//             >
//               <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
//               <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
//             </div>
//           </div>

//           <div className="relative z-1 flex items-center gap-2 pl-9 text-sm text-muted-foreground">
//             {position.employmentType && (
//               <>
//                 <dl>
//                   <dt className="sr-only">Employment Type</dt>
//                   <dd>{position.employmentType}</dd>
//                 </dl>

//                 <Separator
//                   className="data-[orientation=vertical]:h-4"
//                   orientation="vertical"
//                 />
//               </>
//             )}

//             <dl>
//               <dt className="sr-only">Employment Period</dt>
//               <dd>{position.employmentPeriod}</dd>
//             </dl>
//           </div>
//         </CollapsibleTrigger>

//         <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
//           {position.description && (
//             <Prose className="pt-2 pl-9">
//               <ReactMarkdown>{position.description}</ReactMarkdown>
//             </Prose>
//           )}

//           {Array.isArray(position.skills) && position.skills.length > 0 && (
//             <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
//               {position.skills.map((skill, index) => (
//                 <li key={index} className="flex">
//                   <Skill>{skill}</Skill>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </CollapsibleContent>
//       </div>
//     </Collapsible>
//   );
// }

// function Prose({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       className={cn(
//         "prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert",
//         "prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:underline-offset-4",
//         "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function Skill({ className, ...props }: React.ComponentProps<"span">) {
//   return (
//     <span
//       className={cn(
//         "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
//         className
//       )}
//       {...props}
//     />
//   );
// }

import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Project } from "@/app/components/projects/Projects";

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
    <div className={cn("bg-background px-4", className)}>
      {experiences.map((project) => (
        <ExperienceItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export function ExperienceItem({ project }: { project: Project }) {
  return (
    <div className="space-y-4 py-4">
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <ExperiencePositionItem key={project.id} project={project} />
      </div>
    </div>
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
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"
              aria-hidden
            >
              <ExperienceIcon className="size-4" />
            </div>

            <h4 className="flex-1 text-base font-medium text-foreground">
              {project.name}
            </h4>

            <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
            </div>
          </div>

          <div className="relative z-1 flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            <span>{project.teamProject ? "Team Project" : "Solo Project"}</span>
            <Separator orientation="vertical" />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <Prose className="pt-2 pl-9">
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </Prose>

          {/* Tech Stack */}
          <h3 className="pl-9 pt-3 font-semibold">Tech Stack</h3>
          <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
            {project.techStack.map((skill, index) => (
              <li key={index}>
                <Skill>{skill}</Skill>
              </li>
            ))}
          </ul>

          {/* Features */}
          <h3 className="pl-9 pt-3 font-semibold">Features</h3>
          <ul className="list-disc pl-14 space-y-1 text-sm text-muted-foreground">
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
        "prose prose-sm max-w-none text-foreground dark:prose-invert",
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
