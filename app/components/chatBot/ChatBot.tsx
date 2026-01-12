"use client";
import { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed right-3 bottom-3 sm:right-6 sm:bottom-7 z-50 bg-black dark:bg-white text-white dark:text-black p-4 sm:p-5 rounded-full shadow-lg"
      >
        <FiMessageCircle size={22} />
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-x-0 bottom-20 mx-auto z-50 w-[90vw] h-[70vh] max-w-[800px] sm:right-6 sm:bottom-28 sm:inset-x-auto sm:mx-0 sm:w-[570px] sm:h-[580px] bg-black dark:bg-white text-white dark:text-black border border-gray-700 dark:border-gray-300 rounded-xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 dark:border-gray-300">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden">
                  <Image
                    src="/aichatbot.jpg"
                    alt="profile"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <span className="font-semibold">Ubaidur's Assistant</span>
              </div>
              <button
                className="p-2 bg-second-dark/80 text-gray-400 dark:bg-gray-200/70 dark:hover:text-black dark:hover:bg-gray-200 hover:text-white hover:bg-second-dark duration-200 rounded-md"
                onClick={() => setShowChat(false)}
              >
                <FiX size={19} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-3 overflow-y-auto text-sm">
              <div className="bg-gray-800 dark:bg-gray-200 dark:text-black w-[70%] p-2 rounded-md ">
                Hi 👋 I'm Ubaidur's Assistant. How can I help you?
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700 dark:border-gray-300">
              <Input
                type="text"
                required
                className="border border-gray-700 dark:border-gray-300 py-5"
                placeholder="Ask me about my skills or projects..."
                id="name"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
