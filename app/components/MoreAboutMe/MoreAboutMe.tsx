"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import Title from "../shared/Title";
import { MdOutlineMail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { CgGenderMale } from "react-icons/cg";
import { LuCodeXml } from "react-icons/lu";
const MoreAboutMe = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const updateTime = () => {
      const bdTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: false,
      });
      setTime(bdTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  const moreAboutMe = [
    {
      icon: <GrLocation size={19} color="gray" />,
      text: "Sylhet, Bangladesh",
    },
    {
      icon: <MdAccessTime size={19} color="gray" />,
      text: time,
    },
    {
      icon: <MdCall size={19} color="gray" />,
      text: "+880 1735-166610",
    },
    {
      icon: <MdOutlineMail size={19} color="gray" />,
      text: "ubaidurrahman661@gmail.com",
    },
    {
      icon: <LuCodeXml size={19} color="gray" />,
      text: "Full Stack Developer",
    },
    {
      icon: <CgGenderMale size={19} color="gray" />,
      text: "he/him",
    },
  ];
  return (
    <div className="mt-12">
      <Title upperText="Other" lowerText="Information" />
      <div className="grid grid-cols-12 gap-2.5 sm:gap-4 mt-5">
        {moreAboutMe.map((about, idx) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.23, delay: 0.05 * idx }}
            viewport={{ once: true }}
            layout
            key={idx}
            className="col-span-12 sm:col-span-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-[3px] rounded-md bg-gray-200/70 dark:bg-second-dark w-fit">
                {about.icon}
              </div>
              <p className=" font-medium">{about.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutMe;
