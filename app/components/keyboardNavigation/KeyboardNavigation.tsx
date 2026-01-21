"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const KeyboardNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      // Only navigate to /blogs if not already on /blogs
      if (e.key.toLowerCase() === "b" && pathname !== "/blogs") {
        router.push("/blogs");
      }
      // Only navigate to /contact if not already on /contact
      if (e.key.toLocaleLowerCase() === "c" && pathname !== "/contact") {
        router.push("/contact");
      }
      // Only navigate to /resume if not already on /resume
      if (e.key.toLocaleLowerCase() === "r" && pathname !== "/resume") {
        router.push("/resume");
      }
      // Only navigate to / if not already on /
      if (e.key.toLocaleLowerCase() === "h" && pathname !== "/") {
        router.push("/");
      }
      // Only navigate to github account
      if (e.key.toLocaleLowerCase() === "g") {
        router.push("https://github.com/ubaidurxdev");
      }

      if (e.shiftKey && e.key === "ArrowUp") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "l") {
        router.push(
          "https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        );
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "f") {
        router.push(
          "https://www.facebook.com/ubaidur.rahman.881781?rdid=KvGRqC7VQ5zQm27c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#",
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);

  return null;
};

export default KeyboardNavigation;
