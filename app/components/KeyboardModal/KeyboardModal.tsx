import React from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { LuFileText } from "react-icons/lu";
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
        description: "go to contact page",
        key: "C",
      },
      {
        icon: <LuFileText size={20} color="gray" />,
        title: "Go to resume",
        description: "go to resume page",
        key: "R",
      },
    ],
  },
];

const KeyboardModal = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        className="w-xl h-96 bg-gray-50 dark:bg-neutral-800 px-3 py-1.5 rounded-md"
      >
        <div className="flex items-center gap-1 border-b pb-1">
          <IoIosSearch size={20} color="gray" />
          <input
            className="w-full py-0.5 outline-none border-none"
            placeholder="Type a command or search..."
          />
        </div>
        <div>
          {shortCuts.map((short) => (
            <div key={short.id}>
              <p className="text-text-color font-semibold mt-2 text-sm ">
                {short.name}
              </p>
              <div className="space-y-2.5 mt-2">
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


