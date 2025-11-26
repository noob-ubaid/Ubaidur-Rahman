"use client";

import React, { useState, useRef, useEffect } from "react";
import NavLink from "../NavLink/NavLink";
import { ThemeToggleButton } from "@/components/ui/ThemeToggle";
import Logo from "../Logo/Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-transparent sticky top-0 backdrop-blur-sm py-5 px-4 sm:px-0 z-50">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <Logo />
        </div>

        {/* Desktop Links */}
        <div className="md:flex items-center hidden gap-4">
          <NavLink className="" href="/">Portfolio</NavLink>
          <NavLink className="" href="/blogs">Blogs</NavLink>
          <NavLink className="" href="/snippets">Snippets</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggleButton variant="circle" start="top-right" blur />

          {/* Mobile Hamburger */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 rounded-md  border-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <motion.div
                key={isMenuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  ref={menuRef}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden flex flex-col"
                >
                  <NavLink
                    href="/"
                    className="px-4 text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    href="/blogs"
                    className="px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    href="/snippets"
                    className="px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Snippets
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
