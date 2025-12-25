"use client"
import React from "react";
import { motion, Variants } from "framer-motion";
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.17,
      ease: "easeOut",
    },
  },
};

const BlogsHeader = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeUpVariants}
        className="text-2xl sm:text-3xl font-bold text-center"
      >
        Blogs
      </motion.h2>

      <motion.p
        variants={fadeUpVariants}
        className="pb-5 border-b-2 text-center text-text-color mt-6"
      >
        Thoughts, tutorials, and experiences from my journey as a full-stack web
        developer. I share what I learn while building real-world projects.
      </motion.p>
    </motion.div>
  );
};

export default BlogsHeader;
