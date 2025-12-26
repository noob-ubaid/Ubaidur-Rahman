"use client";
import { motion, Variants } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};
type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};
const Page = () => {
  const [data, setData] = useState<FormData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-center"
        variants={itemVariants}
      >
        Contact Me
      </motion.h2>

      <motion.div className="pb-5 border-b-2" variants={itemVariants}>
        <p className="text-center text-text-color mt-6">
          Don’t hesitate to get in touch—whether it’s a new project idea or a
          collaboration invite. I’m eager to connect and typically respond
          within a day. Let’s create something amazing together!
        </p>
      </motion.div>

      <motion.div className="mt-8" variants={itemVariants}>
        <h4 className="font-medium">Send me a message</h4>
        <p className="text-sm text-text-color mt-2 font-medium">
          Fill out the form below and I will get back to you as soon as
          possible.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-7"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-2 flex-1"
            variants={itemVariants}
          >
            <label htmlFor="name" className="text-sm font-medium">
              Name *
            </label>
            <Input
              type="text"
              value={data.name}
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Your full name"
              id="name"
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 flex-1"
            variants={itemVariants}
          >
            <label htmlFor="subject" className="text-sm font-medium">
              Subject *
            </label>
            <Input
              type="text"
              value={data.subject}
              required
              onChange={(e) => setData({ ...data, subject: e.target.value })}
              placeholder="Enter your email subject"
              id="subject"
            />
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col gap-2" variants={itemVariants}>
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <Input
            type="email"
            value={data.email}
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Enter your email"
            id="email"
          />
        </motion.div>

        <motion.div className="flex flex-col gap-2" variants={itemVariants}>
          <label htmlFor="message" className="text-sm font-medium">
            Message *
          </label>
          <Textarea
            value={data.message}
            required
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="Type your message here."
            className="resize-none w-full h-32"
            id="message"
          />
        </motion.div>

        <motion.button
          className="w-full flex items-center justify-center mt-6 gap-2 py-2.5 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-medium"
          variants={itemVariants}
        >
          <Send size={18} /> Get in touch
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Page;
