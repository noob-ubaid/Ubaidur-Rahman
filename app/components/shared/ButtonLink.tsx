"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const ButtonLink = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{y:0,opacity:1}}
      transition={{duration : 0.2}}
      viewport={{once:true}}
      className="mt-8 flex items-center justify-center"
    >
      <Link href={"/blogs"} className="btn-design">
        See more blogs
      </Link>
    </motion.div>
  );
};

export default ButtonLink;
