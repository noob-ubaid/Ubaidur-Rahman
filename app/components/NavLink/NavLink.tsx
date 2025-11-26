"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={`text-black/80 hover:text-black transition-transform duration-300 ${
        isActive && "font-semibold text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
