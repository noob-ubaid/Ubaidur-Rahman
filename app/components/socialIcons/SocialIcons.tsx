"use client";
import Discord from "@/components/svgs/Discord";
import Facebook from "@/components/svgs/Facebook";
import GitHub from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/Linkedin";
import XformerlyTwitter from "@/components/svgs/Twitter";
import WhatsApp from "@/components/svgs/WhatsApp";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialIcons = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LinkedIn className="size-5" />,
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/ubaidurxdev?t=dXrrCouR6TD9CaqpfD2DGQ&s=08",
      icon: <XformerlyTwitter className="size-5 " />,
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com/noob-ubaid",
      icon: <GitHub className="size-5 " />,
    },
    {
      id: 6,
      name: "WhatsApp",
      url: "https://wa.me/8801735166610",
      icon: <WhatsApp className="size-5" />,
    },
    {
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/ubaidur.rahman.881781?rdid=KvGRqC7VQ5zQm27c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#",
      icon: <Facebook className="size-5" />,
    },
    {
      id: 5,
      name: "Discord",
      url: "https://discord.com/users/9jm6f99C",
      icon: <Discord className="size-5" />,
    },
  ];

  return (
    <div className="flex items-center gap-1 mt-6">
      {socialLinks.map((skill, index) => {
        const isHovered = hovered === index;
        return (
          <a href={skill.url} target="_blank" key={index}>
            <motion.div
              layout
              className="border-2 p-1.5 rounded-full flex cursor-pointer overflow-hidden"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{ opacity: isHovered ? 1 : 0.85 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <span className={isHovered ? "mr-2" : undefined}>
                {skill.icon}
              </span>

              <motion.span
                initial={{ opacity: 0, width: 0 }}
                className="text-sm font-medium whitespace-nowrap"
                animate={{
                  width: isHovered ? "auto" : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
