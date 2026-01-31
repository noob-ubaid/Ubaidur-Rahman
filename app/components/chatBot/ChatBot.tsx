"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
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
    transport: new DefaultChatTransport({ api: "/api/chat" }),
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
              text: "Hello! I'm Ubaidur's AI assistant. How can I help you today?",
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

  const quickQuestions = [
    "How can I contact you?",
    "What skills do you have?",
    "What’s your latest project?",
    "What is your biggest project?",
  ];

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
                              <div className="whitespace-pre-wrap wrap-break-word leading-relaxed overflow-wrap-anywhere">
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

                  {messages.length === 1 && (
                    <div>
                      <p className="font-medium text-text-color mb-2 mt-4 text-sm">
                        Quick questions
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {quickQuestions.map((question, idx) => (
                          <button
                            key={idx}
                            onClick={() => setInput(question)}
                            className="text-left border border-gray-200 bg-white dark:bg-zinc-900 dark:border-zinc-800 px-3 py-2 rounded-lg text-xs hover:bg-gray-100 dark:hover:bg-zinc-800 transition shadow-sm"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

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
                              {"Something went wrong. Please try again."}
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
              <CardContent className="border-t pt-4 shrink-0">
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
