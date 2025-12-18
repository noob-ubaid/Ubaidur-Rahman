"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import Title from "../components/shared/Title";
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
    <div className="mt-14">
       <h2 className="text-2xl sm:text-3xl font-bold text-center">Contact Me</h2>
      <div className="pb-5 border-b-2">
        <p className=" text-center text-text-color mt-6">
          Don’t hesitate to get in touch—whether it’s a new project idea or a
          collaboration invite. I’m eager to connect and typically respond
          within a day. Let’s create something amazing together!
        </p>
      </div>
      <div className="mt-8">
        <h4 className=" font-medium">Send me a message</h4>
        <p className="text-sm text-text-color mt-2 font-medium">
          Fill out the form below and I will get back to you as soon as
          possible.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
          <div className="flex flex-col gap-2 flex-1">
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
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="subject" className="text-sm font-medium ">
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
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium ">
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
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium ">
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
        </div>
        <button className=" w-full  flex items-center justify-center mt-6 gap-2 py-2.5 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-medium">
          <Send size={18} /> Get in touch
        </button>
      </form>
    </div>
  );
};

export default Page;
