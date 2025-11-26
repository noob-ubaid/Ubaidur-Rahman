import Image from "next/image";
import React from "react";
import NavLink from "../NavLink/NavLink";
const Navbar = () => {
  return (
    <header className="bg-transparent  sticky top-0 backdrop-blur py-5 ">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">UR</h1>
        </div>
        <div className="md:flex items-center hidden gap-4 ">
          <NavLink href="/">Portfolio</NavLink>
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink href="/snippets">Snippets</NavLink>
        </div>
        <div>
          <h1>dark mode</h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
