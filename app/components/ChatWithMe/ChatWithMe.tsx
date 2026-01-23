"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import Title from "../shared/Title";
const ChatWithMe = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="mt-12">
      <Title upperText="Let’s Build " lowerText="Something" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="border py-16 mt-8 flex items-center rounded-md dark:border-neutral-800 justify-center"
      >
        <div className="flex items-center justify-center flex-col">
          <p className="text-text-color text-lg font-medium mb-4">
            Hey, you scrolled this far, let's talk.
          </p>

          <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={{ width: hovered ? 260 : 210 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border rounded-md dark:border-neutral-800 py-1 px-4 overflow-hidden cursor-pointer"
          >
            <a href="https://wa.me/8801735166610" target="_blank">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Image
                  width={32}
                  height={32}
                  className="object-cover bg-center border-2 rounded-full"
                  src={"/logo.png"}
                  alt="Logo"
                />

                {/* Reserved space wrapper */}
                <motion.span
                  animate={{
                    width: hovered ? "auto" : 0,
                    opacity: hovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex gap-1 items-center"
                >
                  <FaPlus size={17} color="gray" />
                  <span className="rounded-full px-1 py-1.5 border text-xs">
                    You
                  </span>
                </motion.span>

                <span className="font-medium">Chat on Whatsapp</span>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChatWithMe;
