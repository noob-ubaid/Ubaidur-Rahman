import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="pb-5 border-b-2">
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          Contact Me
        </h4>
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
      <form className="mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="name" className="text-sm font-medium">
              Name *
            </label>
            <Input type="text" placeholder="Your full name" id="name" />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="number" className="text-sm font-medium ">
              Phone *
            </label>
            <Input type="number" placeholder="Enter your phone" id="number" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium ">
            Email *
          </label>
          <Input type="email" placeholder="Enter your email" id="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium ">
            Message *
          </label>
          <Textarea
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

export default page;
