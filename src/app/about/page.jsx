import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="mt-10  ">
      <div className="flex items-center gap-10">
        <div className="flex-1 flex flex-col gap-12">
          <h2 className="font-bold text-btn">About Agency</h2>
          <h1 className="text-5xl font-bold">
            We create digital ideas that are bigger, bolder, brave and better.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            repellendus excepturi velit dolore veritatis temporibus, sit labore
            laboriosam sunt voluptatem qui, obcaecati neque. Facilis ani
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <p className="font-bold text-xl text-btn">10 k+</p>
              <span className="text-textSoft text-sm">Year of experience</span>
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-xl text-btn">234 k+</p>
              <span className="text-textSoft text-sm">People reached</span>
            </div>
            <div className="flex flex-col ">
              <p className="font-bold text-xl text-btn">5 k+</p>
              <span className="text-textSoft text-sm">
                Services and plugins
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 h-96 relative">
          <Image className="object-contain" src="/about.png" fill alt="image" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
