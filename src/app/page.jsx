import React from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/hero.gif";

const HomePage = () => {
  return (
    <div className="mt-10">
      <div className="w-full  flex items-center ">
        <div className="w-3/4  flex flex-col">
          <h1 className="text-textSoft text-7xl font-bold w-10 leading-snug ">
            Creative Thoughts Agancy.
          </h1>
          <p className="w-[80%] mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia hic
            officiis quidem reprehenderit quis qui, natus voluptatem perferendis
            expli
          </p>
          <div className="flex gap-2 items-center ">
            <Link href="/" className="">
              <button className="bg-btn text-white p-2 cursor-pointer rounded-md w-full">
                Learn More
              </button>
            </Link>
            <Link href="/contact" className="">
              <button className="bg-textColor text-black p-2 cursor-pointer rounded-md w-full ">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-72 relative">
          <Image fill src={hero} alt="heroImage" priority />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
