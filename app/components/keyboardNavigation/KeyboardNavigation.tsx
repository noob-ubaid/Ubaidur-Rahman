"use client"; // Must be a Client Component

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const KeyboardNavigation = () => {
  const router = useRouter();
  const pathname = usePathname(); // current path

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      // Only navigate to /blogs if not already on /blogs
      if (e.key.toLowerCase() === "b" && pathname !== "/blogs") {
        router.push("/blogs");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);

  return null; // this component doesn’t render anything
};

export default KeyboardNavigation;
