"use client";
import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Title from "../shared/Title";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import Skills from "../techStack/Skills";
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="mt-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Title upperText="About" lowerText="Me" />
        </motion.div>

        <div className="grid grid-cols-10 mt-8 gap-6 sm:gap-4">
          <motion.div
            className="col-span-10 sm:col-span-4 relative w-full h-80 sm:h-72"
            variants={itemVariants}
          >
            <Image
              src={"/aboutme.jpg"}
              alt="profile"
              fill
              blurDataURL="blur"
              className="object-cover bg-top rounded-md"
            />
          </motion.div>

          <motion.div
            className="col-span-10 sm:col-span-6 space-y-2"
            variants={containerVariants}
          >
            <motion.h4 variants={itemVariants} className="text-3xl font-bold">
              Md. Ubaidur Rahman
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className="font-medium text-text-color"
            >
              A detail-oriented full-stack developer specializing in the MERN
              ecosystem. I bring ideas to elegant UI, optimized APIs and
              performance. I’m always experimenting, learning, and pushing
              myself to build better solutions. From front-end experience to
              backend logic, I love crafting products that feel intuitive,
              responsive, and polished.
            </motion.p>

            {/* Open Modal Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => setOpen(true)}
              className="text-sm font-semibold text-primary hover:underline w-fit"
            >
              How I started as a web developer →
            </motion.button>
            <motion.div variants={itemVariants}>
              <Skills/>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 min-h-screen z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-lg rounded-xl bg-background p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  How I Started My Web Development Journey
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold text-text-color hover:opacity-70"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm leading-relaxed text-text-color">
                My development journey started with curiosity. When I was 14, I
                searched on Google to understand how websites are made. That
                made me more curious, so I went to YouTube and learned how
                websites are developed. After completing my 10th exam, I decided
                to learn web development seriously. I started with frontend
                development and learned how to build user interfaces. After
                that, I moved to full-stack development. Now, I am learning MERN
                stack development in depth and improving my skills by building
                real projects.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
