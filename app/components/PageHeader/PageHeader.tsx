"use client";
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
      duration: 0.25,
      ease: "easeOut",
    },
  },
};
const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
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
        {title}
      </motion.h2>

      <motion.p
        variants={fadeUpVariants}
        className="pb-5 border-b-2 text-[15px] sm:text-base text-center text-text-color mt-6"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default PageHeader;
