import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/hero.gif";

const HomePage = () => {
  return (
    <div className="mt-10 min-h-screen">
      <div className="w-full gap-10 flex items-center justify-center ">
        <div className="md:flex-1  flex flex-col text-center md:text-left gap-12">
          <h1 className="text-textSoft text-5xl md:text-7xl font-bold ">
            Creative Thoughts Agancy.
          </h1>
          <p className="text-lg ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia hic
            officiis quidem reprehenderit quis qui, natus voluptatem perferendis
            expli
          </p>
          <div className="flex gap-5 items-center justify-center md:justify-start ">
            <Link href="/" className="">
              <button className="bg-btn text-white p-4 cursor-pointer rounded-md min-w-28">
                Learn More
              </button>
            </Link>
            <Link href="/contact" className="">
              <button className="bg-textColor text-black p-4 cursor-pointer rounded-md min-w-28 ">
                Contact
              </button>
            </Link>
          </div>
          <div className="relative w-[500px] h-12 grayscale hidden md:block ">
            <Image className="" fill alt="brandImage" src="/brands.png" />
          </div>
        </div>
        <div className="hidden md:block h-96 relative flex-1">
          <Image fill src={hero} alt="heroImage" priority />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
