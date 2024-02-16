"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";

import { FaAlignRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  //   static data
  const admin = true;
  const session = true;

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && e.target.closest(".navContainer")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  const handleNavLinkClick = (path) => {
    setIsOpen(false);
    router.push(path);
  };
  return (
    <nav className="w-full  md:mt-0 mt-8 navContainer">
      <div className="md:flex  md:h-[100px]  justify-between items-center md:w-full ">
        <div className="flex   w-full items-center  md:block">
          <div className="font-bold text-2xl order-1 md:order-none ">
            <Link href="/">Shaina</Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-white  transition-all transform hover:scale-110 duration-[0.9s] ease-in-out"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <FaXmark className="text-red-700 text-2xl " />
              ) : (
                <FaAlignRight />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden w-full  absolute left-0 top-0 transition-transform ease-in-out duration-500 transform   ${
            isOpen ? "translate-x-0  backdrop-blur-lg" : "-translate-x-full  "
          }`}
        >
          <div
            className={`flex w-3/4 justify-between px-4 border-b pt-4 items-center bg-gray-800 md:block`}
          >
            <div className="font-bold text-2xl order-1 md:order-none ">
              <Link href="/">Shaina</Link>
            </div>
            <div className="md:hidden">
              <button
                className="text-white  transition-all transform hover:scale-110 duration-[0.9s] ease-in-out"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {isOpen ? (
                  <FaXmark className="text-red-700 text-2xl " />
                ) : (
                  <FaAlignRight />
                )}
              </button>
            </div>
          </div>
          <div className="">
            {" "}
            <ul className=" flex  flex-col  items-center  gap-10 w-3/4 h-screen bg-slate-800 ">
              <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                <Link className="hoverNavLinkEffect" href="/">
                  <div
                    className={`${pathname === "/" && "md:activeLink"} `}
                    // onClick={(e) => setIsOpen((prev) => !prev)}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setIsOpen(false);
                    // }}
                    onClick={() => handleNavLinkClick("/")}
                  >
                    {" "}
                    Home
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                <Link className="hoverNavLinkEffect" href="/about">
                  <div
                    className={` ${pathname === "/about" && "md:activeLink"} `}
                    // onClick={() => setIsOpen((prev) => !prev)}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setIsOpen(false);
                    // }}
                    onClick={() => handleNavLinkClick("/about")}
                  >
                    About
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                <Link className="hoverNavLinkEffect" href="/contact">
                  <div
                    className={` ${
                      pathname === "/contact" && "md:activeLink"
                    } `}
                    onClick={() => handleNavLinkClick("/")}

                    // onClick={() => setIsOpen((prev) => !prev)}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setIsOpen(false);
                    // }}
                  >
                    Contact
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                <Link className="hoverNavLinkEffect" href="/blog">
                  <div
                    className={` ${pathname === "/blog" && "md:activeLink"} `}
                    // onClick={() => setIsOpen((prev) => !prev)}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setIsOpen(false);
                    // }}
                    onClick={() => handleNavLinkClick("/")}
                  >
                    Blog
                  </div>
                </Link>
              </li>

              {session ? (
                <div className="flex items-center md:-ml-6 md:gap-x-4">
                  {admin && (
                    <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                      <Link className="hoverNavLinkEffect" href="/admin">
                        <div
                          className={` ${
                            pathname === "/admin" && "md:activeLink"
                          } `}
                          //   onClick={() => setIsOpen((prev) => !prev)}
                          //   onClick={(e) => {
                          //     e.preventDefault();
                          //     setIsOpen(false);
                          //   }}
                          onClick={() => handleNavLinkClick("/")}
                        >
                          Admin
                        </div>
                      </Link>
                    </li>
                  )}
                  <button className="bg-btn text-white cursor-pointer p-2 md:rounded-md rounded-sm">
                    Logout
                  </button>
                </div>
              ) : (
                <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                  <Link className="hoverNavLinkEffect" href="/login">
                    <button className="bg-btn text-white p-2 cursor-pointer rounded-md">
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <ul className="hidden md:flex md:flex-row flex-col   items-center md:justify-between gap-10 md:gap-2 lg:gap-6 ">
          <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
            <Link className="hoverNavLinkEffect" href="/">
              <div
                className={`${pathname === "/" && "md:activeLink"} `}
              >
                Home
              </div>
            </Link>
          </li>
          <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
            <Link className="hoverNavLinkEffect" href="/about">
              <div
                className={` ${pathname === "/about" && "md:activeLink"} `}
              >
                About
              </div>
            </Link>
          </li>
          <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
            <Link className="hoverNavLinkEffect" href="/contact">
              <div
                className={` ${pathname === "/contact" && "md:activeLink"} `}
              >
                Contact
              </div>
            </Link>
          </li>
          <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
            <Link className="hoverNavLinkEffect" href="/blog">
              <div
                className={` ${pathname === "/blog" && "md:activeLink"} `}
              >
                Blog
              </div>
            </Link>
          </li>

          {session ? (
            <div className="flex items-center md:-ml-6 md:gap-x-4">
              {admin && (
                <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
                  <Link className="hoverNavLinkEffect" href="/admin">
                    <div
                      className={` ${
                        pathname === "/admin" && "md:activeLink"
                      } `}
                    >
                      Admin
                    </div>
                  </Link>
                </li>
              )}
              <button className="bg-btn text-white cursor-pointer p-2 md:rounded-md rounded-sm">
                Logout
              </button>
            </div>
          ) : (
            <li className="cursor-pointer w-full p-4  relative md:static  text-center ">
              <Link className="hoverNavLinkEffect" href="/login">
                <button className="bg-btn text-white p-2 cursor-pointer rounded-md">
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
