import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex  items-center ">
        <div className="relative  h-96 w-[90%]">
          <Image className="object-cover " src="/contact.png" fill />
        </div>
        <p className="[writing-mode:vertical-rl] text-sm m-auto  w-[10%]">
          Nov
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h2>title</h2>
        <p className="text-sm truncate text-gray-300 font-thin">desc</p>
        <Link className="underline" href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
