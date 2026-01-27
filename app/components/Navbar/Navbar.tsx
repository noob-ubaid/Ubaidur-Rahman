"use client";

import React, { useState, useRef, useEffect } from "react";
import { ThemeToggleButton } from "@/components/ui/ThemeToggle";
import Logo from "../Logo/Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import KeyboardModal from "../KeyboardModal/KeyboardModal";
interface nav {
  id: number;
  label: string;
  href: string;
}
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const pathname = usePathname();

  const handleKeyboardModal = () => {
    setShowModal(true);
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const navItems: nav[] = [
    {
      id: 1,
      label: "Portfolio",
      href: "/",
    },
    {
      id: 2,
      label: "Blogs",
      href: "/blogs",
    },
    {
      id: 3,
      label: "Contact",
      href: "/contact",
    },
  ];
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowModal((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="bg-transparent sticky top-0 backdrop-blur-sm  z-50">
        <div className="max-w-[720px] mx-auto flex py-3 px-4 sm:px-0 items-center justify-between">
          <div>
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="md:flex items-center hidden">
            {navItems.map((item, idx) => (
              <Link
                href={item.href}
                key={item.id}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-2.5 py-1 "
              >
                {hovered === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full rounded-sm bg-neutral-100 dark:bg-second-dark"
                    layoutId="hovered-span"
                  />
                )}
                <span
                  className={`relative z-10 ${
                    item.href === pathname ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleKeyboardModal()}
              className="border-3 py-[7px] px-2 rounded-md hidden lg:flex group text-xs items-center text-text-color gap-1"
            >
              <IoIosSearch size={19} />

              <p>
                {" "}
                <span className="keyboard-key">CTRL</span>
                <span className="keyboard-key px-1 ml-1.5">K</span>
              </p>
            </button>
            <ThemeToggleButton variant="circle" start="top-right" blur />
            {/* Mobile Hamburger */}
            <div
              className="sm:hidden relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <button className="p-1 rounded-md  border-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 0, opacity: 0 }}
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
                    {navItems.map((item, idx) => (
                      <Link
                        href={item.href}
                        key={item.id}
                        className="relative px-4 py-2 text-center overflow-hidden"
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <AnimatePresence>
                          {hovered === idx && (
                            <motion.span
                              layoutId="hovered-span"
                              className="absolute inset-0 rounded-sm bg-neutral-100 dark:bg-second-dark"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>

                        <span className="relative z-10">{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* show keyboard modal  */}
      <AnimatePresence>
        {showModal && <KeyboardModal setShowModal={setShowModal} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
