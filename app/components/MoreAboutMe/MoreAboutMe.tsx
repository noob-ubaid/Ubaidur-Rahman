"use client";
import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import Title from "../shared/Title";
import { MdOutlineMail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
const MoreAboutMe = () => {
  const [time, setTime] = useState("00:00 AM");

  useEffect(() => {
    const updateTime = () => {
      const bdTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
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
  ];
  return (
    <div className=" mt-12">
      <Title upperText="Other" lowerText="Information" />
      <div className="grid grid-cols-12 gap-3 mt-5">
        {moreAboutMe.map((about, idx) => (
          <div key={idx} className="col-span-12 sm:col-span-6">
            <div className="flex items-center gap-3">
              <div className="p-[3px] rounded-md bg-gray-200/70 dark:bg-second-dark w-fit">
                {about.icon}
              </div>
              <p className="text-text-color font-medium">{about.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreAboutMe;
