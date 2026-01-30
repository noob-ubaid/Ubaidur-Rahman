// "use client";
// import { useEffect, useState } from "react";
// import { FiMessageCircle, FiX } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Send } from "lucide-react";
// const ChatBot = () => {
//   const [showChat, setShowChat] = useState(false);
//   const time = new Date().toLocaleTimeString([],{hour:"2-digit", minute:"2-digit"});

// useEffect(() => {
//   const handleKeyDown = (e: KeyboardEvent) => {
//     const target = e.target as HTMLElement;
//     if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
//     if (e.key.toLowerCase() === "a") {
//       setShowChat(!showChat);
//     }
//   };
//   window.addEventListener("keydown", handleKeyDown);
//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, [showChat, setShowChat]);

//   return (
//     <>
//       {/* Floating Button */}
//       <button
//         onClick={() => setShowChat(!showChat)}
//         className="fixed right-3 bottom-3 sm:right-6 sm:bottom-7 z-50 bg-black dark:bg-white text-white dark:text-black p-4 sm:p-5 rounded-full shadow-lg"
//       >
//         <FiMessageCircle size={22} />
//       </button>

//       {/* Chat Box */}
//       <AnimatePresence>
//         {showChat && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.15 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed inset-x-0 bottom-20 mx-auto z-50 w-[90vw] h-[70vh] max-w-[800px] sm:right-6 sm:bottom-28 sm:inset-x-auto sm:mx-0 sm:w-[570px] sm:h-[580px] bg-black dark:bg-white text-white dark:text-black border border-gray-700 dark:border-gray-300 rounded-md shadow-2xl flex flex-col"
//           >
//             {/* Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-700 dark:border-gray-300">
//               <div className="flex items-center gap-4">
//                 <div>

//                 </div>
//                 <div>
//                   <p className="font-medium">Ubaidur's Assistant</p>
//                   <p className="text-text-color">Full Stack Developer</p>
//                 </div>
//               </div>
//               <button
//                 className="p-2 bg-second-dark/80 text-gray-400 dark:bg-gray-200/70 dark:hover:text-black dark:hover:bg-gray-200 hover:text-white hover:bg-second-dark duration-200 rounded-md"
//                 onClick={() => setShowChat(false)}
//               >
//                 <FiX size={19} />
//               </button>
//             </div>

//             {/* Chat Body */}
//             <div className="flex-1 p-3 overflow-y-auto text-sm">
//               <div className="bg-gray-800 dark:bg-gray-200 dark:text-black w-[70%] p-2 rounded-md ">
//                 <p className="">
//                   Hi 👋 I'm Ubaidur's Assistant. How can I help you?
//                 </p>
//                 <p className="text-right mt-2 text-text-color">{time}</p>
//               </div>
//             </div>

//             {/* Input */}
//             <div>
//               <form className="p-3 border-t flex gap-2.5 border-gray-700 dark:border-gray-300">
//                 <Input
//                   type="text"
//                   required
//                   className="border border-gray-700 dark:border-gray-300 py-5"
//                   placeholder="Ask me about my skills or projects..."
//                   id="name"
//                 />
//                 <Button
//                   type="submit"
//                   className="p-5 bg-second-dark/80 dark:bg-gray-200/70 dark:hover:text-black dark:hover:bg-gray-200 hover:text-white hover:bg-second-dark duration-200 rounded-md"
//                 >
//                   <Send size={19} />
//                 </Button>
//               </form>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default ChatBot;

"use client";

import { useChat } from "@ai-sdk/react";
import { useRef, useEffect, useState } from "react";
import { Send, Bot, User, Loader2, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

const {
  messages,
  sendMessage,
  status,
  error,
  regenerate,
  stop,
  setMessages,
} = useChat({
  api: "/api/chat", // make sure this is correct
  onError: (err) => console.error("Chat error:", err),
  onFinish: () => inputRef.current?.focus(),
});

  const isLoading = status === "streaming" || status === "submitted";
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (e.key.toLowerCase() === "a") {
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, setOpen]);

  // Add welcome message once
  useEffect(() => {
    if (messages.length === 0) {
      setMessages((prev) => [
        ...prev,
        {
          id: "welcome",
          role: "assistant" as const,
          parts: [
            {
              type: "text" as const,
              text: "Hello! I'm your AI assistant. How can I help you today?",
            },
          ],
        },
      ]);
    }
  }, [messages.length, setMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    sendMessage({
      role: "user",
      parts: [{ type: "text", text: input }],
    });
    setInput("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  return (
    <>
      {/* Floating Chat Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition"
      >
        <Bot className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-x-0 bottom-20 mx-auto z-50 w-[90vw] h-[70vh] max-w-[800px] sm:right-6 sm:bottom-28 sm:inset-x-auto sm:mx-0 sm:w-[570px] sm:h-[580px]  rounded-md shadow-2xl flex flex-col"
          >
            <Card className="h-full flex flex-col overflow-hidden">
              {/* Header */}
              <CardHeader className="border-b ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-9 w-9">
                      <Image
                        width={48}
                        height={48}
                        className="object-cover border-2 border-gray-300 bg-center rounded-full"
                        src={"/logo.png"}
                        alt="Logo"
                      />
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">
                        Ubaidur’s AI Assistant
                      </CardTitle>
                      <CardDescription className="text-sm">
                        <div className="flex items-center gap-2">
                          {" "}
                          <div className="size-2 rounded-full bg-green-500"></div>{" "}
                          Online
                        </div>
                      </CardDescription>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              {/* Messages */}
              <ScrollArea ref={scrollAreaRef} className="flex-1 min-h-0">
                <div className="p-4 space-y-4 pb-4">
                  {messages.map((message) => {
                    const isUser = (message.role as string) === "user";
                    return (
                      <div
                        key={message.id}
                        className={cn(
                          "flex",
                          isUser ? "justify-end" : "justify-start",
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-start gap-3 max-w-[85%] min-w-0",
                            isUser && "flex-row-reverse",
                          )}
                        >
                          <Avatar className="h-8 w-8 shrink-0">
                            <AvatarFallback
                              className={cn(
                                isUser
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted",
                              )}
                            >
                              {isUser ? (
                                <User className="h-4 w-4" />
                              ) : (
                                <Image
                                  width={48}
                                  height={48}
                                  className="object-cover border-2 border-gray-300 bg-center rounded-full"
                                  src={"/logo.png"}
                                  alt="Logo"
                                />
                              )}
                            </AvatarFallback>
                          </Avatar>

                          <div className="space-y-1 min-w-0 flex-1">
                            <div
                              className={cn(
                                "rounded-lg px-4 py-2.5 text-sm max-w-full",
                                isUser
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted",
                              )}
                            >
                              <div className="whitespace-pre-wrap break-words leading-relaxed overflow-wrap-anywhere">
                                {message.parts?.map((part, index) => {
                                  if (part.type === "text") {
                                    return <p key={index}>{part.text}</p>;
                                  }
                                  return null;
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Loading */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-3 max-w-[85%]">
                        <Avatar className="h-8 w-8">
                          <Image
                            width={48}
                            height={48}
                            className="object-cover border-2 border-gray-300 bg-center rounded-full"
                            src={"/logo.png"}
                            alt="Logo"
                          />
                        </Avatar>
                        <div className="bg-muted rounded-lg px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span className="text-sm text-muted-foreground">
                              Thinking...
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error */}
                  {error && (
                    <div className="flex justify-center px-4">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 max-w-md">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-destructive mt-0.5" />
                          <div className="space-y-1">
                            <p className="text-sm text-destructive">
                              {error.message ||
                                "Something went wrong. Please try again."}
                            </p>
                            <Button
                              onClick={() => regenerate()}
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-xs"
                            >
                              Retry last message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <CardContent className="border-t pt-4 flex-shrink-0">
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-2"
                >
                  <Input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="border border-gray-700 dark:border-gray-300 py-4.5"
                  />

                  {isLoading ? (
                    <Button
                      type="button"
                      onClick={stop}
                      variant="destructive"
                      size="sm"
                    >
                      Stop
                    </Button>
                  ) : (
                    <Button
                      className="p-5  rounded-md"
                      type="submit"
                      disabled={!input.trim()}
                      size="sm"
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
