"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full md:flex  mt-8">
      <div className="md:flex md:w-full">
        <div className="flex  w-full items-center justify-between md:block">
          <div>
            <Link href="/">Shaina</Link>
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:mt-0 md:mb-0 md:block ${
            isOpen ? "  block" : " hidden"
          }`}
        >
          <ul className="flex md:flex-row flex-col items-center md:justify-between gap-10  h-screen md:h-auto">
            <li className="cursor-pointer w-full p-4  hover:shadow-lg hover:shadow-slate-800 md:hover:shadow-none  text-center ">
              <Link href="/">
                <div onClick={() => setIsOpen(!isOpen)}>Home</div>
              </Link>
            </li>
            <li className="cursor-pointer w-full p-4  hover:shadow-lg hover:shadow-slate-800 md:hover:shadow-none  text-center ">
              <Link href="/about">
                <div onClick={() => setIsOpen(!isOpen)}>About</div>
              </Link>
            </li>
            <li className="cursor-pointer w-full p-4  hover:shadow-lg hover:shadow-slate-800 md:hover:shadow-none  text-center ">
              <Link href="/contact">
                <div onClick={() => setIsOpen(!isOpen)}>Contact</div>
              </Link>
            </li>
            <li className="cursor-pointer w-full p-4  hover:shadow-lg hover:shadow-slate-800 md:hover:shadow-none  text-center ">
              <Link href="/blog">
                <div onClick={() => setIsOpen(!isOpen)}>Blog</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
