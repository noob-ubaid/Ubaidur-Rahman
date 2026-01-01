import React from "react";
import { FiMessageCircle } from "react-icons/fi";
const ChatBot = () => {
  return (
    <div className="bg-black dark:bg-white fixed sm:right-6 sm:bottom-7 text-white dark:text-black sm:p-5 p-4 right-3 bottom-3 rounded-full">
      <FiMessageCircle size={22}/>
    </div>
  );
};

export default ChatBot;
