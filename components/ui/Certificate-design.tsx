"use client";
import { ChevronsDownUpIcon, ChevronsUpDownIcon, CodeIcon } from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GoArrowRight } from "react-icons/go";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export interface Certificate {
  id: number;
  title: string;
  description: string;
  data: string;
  skills: string[];
  certificate: string;
}

interface CertificatesProps {
  className?: string;
  certificates: Certificate[];
}

export function CertificatesList({
  className,
  certificates,
}: CertificatesProps) {
  return (
    <div className={cn("bg-background mt-6", className)}>
      {certificates.map((cert, index) => (
        <CertificateItem key={cert.id} cert={cert} index={index} />
      ))}
    </div>
  );
}

function CertificateItem({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  return (
    <motion.div
      className="space-y-4 py-4"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.05 }}
    >
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <CertificatePositionItem cert={cert} />
      </div>
    </motion.div>
  );
}

function CertificatePositionItem({ cert }: { cert: Certificate }) {
  return (
    <Collapsible defaultOpen={false} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "group/certificate not-prose block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:rounded-lg hover:before:bg-muted/50"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            {/* Icon */}
            <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <CodeIcon className="size-4" />
            </div>

            {/* Title */}
            <h4 className="flex-1 text-base font-medium text-foreground">
              {cert.title}
            </h4>

            {/* Download certificate */}
            <Link
              href={cert.certificate}
              target="_blank"
              className="group flex items-center gap-1 hover:underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Certificate
            </Link>
            <div className="text-muted-foreground [&_svg]:size-4">
              <ChevronsDownUpIcon className="hidden group-data-[state=open]/certificate:block" />
              <ChevronsUpDownIcon className="hidden group-data-[state=closed]/certificate:block" />
            </div>
          </div>

          {/* Meta */}
          <div className="relative z-1 flex items-center gap-3 pl-9 text-sm text-muted-foreground">
            <span className="font-medium">{cert.data}</span>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <Prose className="pt-2 pl-9 text-text-color ">
            <ReactMarkdown>{cert.description}</ReactMarkdown>
          </Prose>

          <h3 className="pl-9 pt-3 font-semibold">Skills Learned</h3>
          <ul className="not-prose flex flex-wrap gap-1.5 pt-2 pl-9">
            {cert.skills.map((skill, index) => (
              <li key={index}>
                <Skill>{skill}</Skill>
              </li>
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
