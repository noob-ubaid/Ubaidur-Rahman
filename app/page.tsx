import Image from "next/image";
import TechButton from "./components/TechButton/TechButton";
import React from "@/components/svgs/React";
import TypeScript from "@/components/svgs/TypeScript";
import Nextjs from "@/components/svgs/Next";
import Nodejs from "@/components/svgs/Node";
import { Button } from "@/components/ui/button";
import { Newspaper, Send } from "lucide-react";
import Link from "next/link";
import PostgreSQL from "@/components/svgs/PostgreSql";
interface TechStack {
  name: string;
  doc: string;
}
const react: TechStack = {
  name: "React.js",
  doc: "https://react.dev/",
};
const next: TechStack = {
  name: "Next.js",
  doc: "https://nextjs.org/docs",
};
const typeScript: TechStack = {
  name: "TypeScript",
  doc: "https://www.typescriptlang.org/docs/",
};
const node: TechStack = {
  name: "Node.js",
  doc: "https://nodejs.org/en",
};
const postgreSql: TechStack = {
  name: "PostgreSql",
  doc: "https://www.postgresql.org/docs/",
};
export default function Home() {
  return (
    <div className="mt-4">
      <Image
        src="/profile.jpg"
        alt="image"
        width={100}
        height={60}
        className="rounded-full"
      />
      <p className="mt-8 font-semibold text-3xl">
        Hi, I'm Ubaidur ——{" "}
        <span className="text-text-color">A Full Stack Developer </span>
      </p>
      <p className="mt-6 text-lg text-text-color leading-8 ">
        I specialize in building fast, modern, and scalable web applications
        using <TechButton icon={React} name={react.name} href={react.doc} /> ,
        <TechButton
          icon={TypeScript}
          name={typeScript.name}
          href={typeScript.doc}
        />
        , <TechButton icon={Nextjs} name={next.name} href={next.doc} /> ,
        <TechButton icon={Nodejs} name={node.name} href={node.doc} />, and{" "}
        <TechButton
          icon={PostgreSQL}
          name={postgreSql.name}
          href={postgreSql.doc}
        />
        . With a strong focus on clean{" "}
        <span className="font-semibold text-black dark:text-white">UI</span> ,
        user experience, and{" "}
        <span className="font-semibold text-black dark:text-white">
          performance
        </span>
        .
      </p>
      <div className="mt-6 flex items-center gap-4 sm:gap-6">
        <Link
          href={"/resume"}
          className="inline-flex items-center shadow-[inset_0_0_15px_rgba(0,0,0,0.08)] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background btn-inner-shadow hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9  py-3 sm:px-10 px-7 inset-shadow-indigo-500"
        >
          <Newspaper />
          Resume
        </Link>
        <Link
          href={"/"}
          className="sm:px-10 px-7 flex items-center gap-2 py-2 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-medium"
        >
          <Send size={18} /> Get in touch
        </Link>
      </div>
    </div>
  );
}
