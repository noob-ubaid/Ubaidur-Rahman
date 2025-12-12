import React, { ReactNode } from "react";
import { Lora } from "next/font/google";
const lora = Lora({
  subsets: ["latin"],
  weight: ["700"],
});
import { motion } from "framer-motion";
interface TitleProps {
  text: ReactNode;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <motion.h4
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{once:true}}
      className={`text-3xl italic ${lora.className} text-center md:text-4xl mt-14 mb-8 font-medium `}
    >
      {text}
    </motion.h4>
  );
};

export default Title;
