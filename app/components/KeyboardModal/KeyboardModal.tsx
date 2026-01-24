"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline, IoBookOutline, IoSunnyOutline } from "react-icons/io5";
import { IoIosCall, IoIosArrowRoundUp } from "react-icons/io";
import { LuFileText } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const shortCuts = [
  {
    id: 1,
    name: "Navigation",
    allShortCut: [
      {
        icon: <IoHomeOutline size={20} color="gray" />,
        title: "Go to Home",
        description: "go to home page",
        key: "H",
      },
      {
        icon: <IoBookOutline size={20} color="gray" />,
        title: "Go to Blogs",
        description: "browse all blogs",
        key: "B",
      },
      {
        icon: <IoIosCall size={20} color="gray" />,
        title: "Go to contact",
        description: "View Contact Info",
        key: "C",
      },
      {
        icon: <LuFileText size={20} color="gray" />,
        title: "Go to resume",
        description: "Check out my resume",
        key: "R",
      },
    ],
  },
  {
    id: 2,
    name: "Features",
    allShortCut: [
      {
        icon: <FiMessageCircle size={20} color="gray" />,
        title: "Open the chatbot",
        description: "Ask something from AI",
        key: "A",
      },
      {
        icon: <IoSunnyOutline size={20} color="gray" />,
        title: "Toggle theme",
        description: "Change to light or dark mode",
        key: "T",
      },
      {
        icon: <IoIosArrowRoundUp size={20} color="gray" />,
        title: "Scroll to top",
        description: "Scroll to top of the page",
        key: `SHIFT + ↑`,
      },
    ],
  },
  {
    id: 3,
    name: "Social links",
    allShortCut: [
      {
        icon: <FaWhatsapp size={20} color="gray" />,
        title: "Chat on WhatsApp",
        description: "Start a conversation with me",
        key: "SHIFT + W",
      },
      {
        icon: <FaLinkedin size={20} color="gray" />,
        title: "Open Linkedin",
        description: "Checkout my LinkedIn posts",
        key: "SHIFT + L",
      },
      {
        icon: <MdOutlineEmail size={20} color="gray" />,
        title: "Send Email",
        description: "Contact me via email",
        key: "SHIFT + E",
      },
      {
        icon: <FaSquareFacebook size={20} color="gray" />,
        title: "Open Facebook",
        description: "Checkout my Facebook posts",
        key: "SHIFT + F",
      },
      {
        icon: <FaGithub size={20} color="gray" />,
        title: "Open Github",
        description: "Checkout my repositories",
        key: "SHIFT + G",
      },
      {
        icon: <FaXTwitter size={20} color="gray" />,
        title: "Open X",
        description: "Checkout my X posts",
        key: "SHIFT + T",
      },
    ],
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -6, scale: 0.98 },
};

const KeyboardModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShortcuts = shortCuts
    .map((group) => ({
      ...group,
      allShortCut: group.allShortCut.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((group) => group.allShortCut.length > 0);

  const hasResults = filteredShortcuts.length > 0;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={() => setShowModal(false)}
      className="flex items-center fixed inset-0 z-50 backdrop-blur-[2px] justify-center bg-black/40"
    >
      <motion.div
        layout="position"
        onClick={(e) => e.stopPropagation()}
        className="w-xl bg-gray-50 dark:bg-neutral-900 px-3 py-1.5 rounded-md overflow-hidden"
      >
        {/* Search */}
        <div className="flex items-center gap-1 border-b pb-1">
          <IoIosSearch size={20} color="gray" />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-0.5 outline-none border-none bg-transparent"
            placeholder="Type a command or search..."
          />
        </div>

        {/* Results */}
        <div className="h-96 overflow-hidden mt-2 relative">
          <AnimatePresence mode="wait">
            {!hasResults ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center  text-text-color font-medium"
              >
                No results found
              </motion.div>
            ) : (
              <motion.div
                key="results"
                layout="position"
                className="absolute inset-0 overflow-y-auto pr-1 space-y-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredShortcuts.map((short) => (
                    <motion.div
                      layout="position"
                      key={short.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.p
                        layout="position"
                        className="font-semibold text-[15px] mb-1"
                      >
                        {short.name}
                      </motion.p>

                      <div className="space-y-2.5">
                        <AnimatePresence mode="popLayout">
                          {short.allShortCut.map((item) => (
                            <motion.div
                              layout="position"
                              key={item.title}
                              variants={rowVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ duration: 0.15, ease: "easeOut" }}
                              className="flex items-center hover:bg-gray-200/60 dark:hover:bg-neutral-700 p-1.5 rounded-md justify-between"
                            >
                              <div className="flex items-center gap-3">
                                {item.icon}
                                <div>
                                  <p className="text-sm font-medium">
                                    {item.title}
                                  </p>
                                  <p className="text-[13px] text-text-color">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                              <span className="border py-1 bg-gray-100 dark:bg-neutral-700 px-1.5 text-xs rounded-[3px]">
                                {item.key}
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default KeyboardModal;
