"use client";
import React from "@/components/svgs/React";
import TypeScript from "@/components/svgs/TypeScript";
import Nextjs from "@/components/svgs/Next";
import { Newspaper, Send } from "lucide-react";
import Link from "next/link";
import PostgreSQL from "@/components/svgs/PostgreSql";
import { motion, Variants } from "framer-motion";
import TechButton from "../TechButton/TechButton";
import SocialIcons from "../socialIcons/SocialIcons";
import Expressjs from "@/components/svgs/Express";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import CircuitMini from "../CircuitBackground/CircuitBackground";

interface TechStack {
  name: string;
  doc: string;
}

const react: TechStack = {
  name: "React.js",
  doc: "https://react.dev",
};
const next: TechStack = {
  name: "Next.js",
  doc: "https://nextjs.org/docs",
};
const typeScript: TechStack = {
  name: "TypeScript",
  doc: "https://www.typescriptlang.org/docs",
};
const express: TechStack = {
  name: "Express.js",
  doc: "https://nodejs.org/en",
};
const postgreSql: TechStack = {
  name: "PostgreSql",
  doc: "https://www.postgresql.org/docs",
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Decorative circuit animation */}
      <motion.div
        variants={itemVariants}
        className="absolute sm:top-56 top-[285px] right-0 opacity-60 dark:opacity-80 pointer-events-none"
      >
        <CircuitMini />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-end gap-2">
          <motion.div variants={itemVariants}>
            <Image
              width={120}
              height={120}
              className="object-cover bg-center border-2 rounded-full"
              src={"/hero.png"}
              alt="Logo"
            />
          </motion.div>
          <motion.p
            className="font-semibold flex items-center gap-1 sm:gap-2 text-[22px] sm:text-[28px]"
            variants={itemVariants}
          >
            Ubaidur <RiVerifiedBadgeFill size={20} /> —{" "}
            <span className="text-text-color text-lg sm:text-xl">
              A Full Stack Developer{" "}
            </span>
          </motion.p>
        </div>

        <motion.p
          className="mt-6 text-lg text-text-color leading-9"
          variants={itemVariants}
        >
          I specialize in building fast, modern, and scalable web applications
          using <TechButton icon={React} name={react.name} href={react.doc} /> ,{" "}
          <TechButton
            icon={TypeScript}
            name={typeScript.name}
            href={typeScript.doc}
          />{" "}
          , <TechButton icon={Nextjs} name={next.name} href={next.doc} /> ,{" "}
          <TechButton icon={Expressjs} name={express.name} href={express.doc} />{" "}
          and{" "}
          <TechButton
            icon={PostgreSQL}
            name={postgreSql.name}
            href={postgreSql.doc}
          />
          . With a strong focus on clean{" "}
          <span className="font-semibold text-black dark:text-white">UI</span> ,{" "}
          <span className="font-semibold text-black dark:text-white">UX</span>{" "}
          and{" "}
          <span className="font-semibold text-black dark:text-white">
            performance
          </span>
          .
        </motion.p>

        <motion.div variants={itemVariants}>
          <SocialIcons />
        </motion.div>

        <motion.div
          className="mt-6 flex items-center gap-3 sm:gap-6"
          variants={itemVariants}
        >
          <Link href={"/resume"} className="btn-design">
            <Newspaper />
            Resume
          </Link>
          <Link
            href={"/contact"}
            className=" px-5 flex items-center gap-2 py-2 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-medium"
          >
            <Send size={18} /> Get in touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
