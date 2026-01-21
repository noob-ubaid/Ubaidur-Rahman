import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { LuFileText } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
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
        icon: <FaSquareFacebook size={20} color="gray" />,
        title: "Open Facebook",
        description: "Checkout my Facebook posts",
        key: "SHIFT + F",
      },
    ],
  },
];

const KeyboardModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-xl bg-gray-50 dark:bg-neutral-800 px-3 py-1.5 rounded-md"
      >
        <div className="flex items-center gap-1 border-b pb-1">
          <IoIosSearch size={20} color="gray" />
          <input
            className="w-full py-0.5 outline-none border-none"
            placeholder="Type a command or search..."
          />
        </div>
        <div className="h-80 overflow-y-scroll">
          {shortCuts.map((short) => (
            <div key={short.id}>
              <p className="text-text-color font-semibold mt-3 text-sm ">
                {short.name}
              </p>
              <div className="space-y-2.5 mt-1">
                {short.allShortCut.map((key, idx) => (
                  <div
                    key={idx}
                    className="flex items-center duration-200 hover:bg-gray-200/60 dark:hover:bg-neutral-700 p-1.5 rounded-md justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {key.icon}
                      <div>
                        <p className="text-sm font-medium ">{key.title}</p>
                        <p className="text-[13px] text-text-color">
                          {key.description}
                        </p>
                      </div>
                    </div>
                    <div>
                      <span className="border py-1 bg-gray-100 dark:bg-neutral-700 px-1.5 text-xs rounded-[3px]">
                        {key.key}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default KeyboardModal;
