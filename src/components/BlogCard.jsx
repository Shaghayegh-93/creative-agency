import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ postData }) => {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div className="flex  items-center ">
        {postData.img && (
          <div className="relative  h-96 w-[90%]">
            <Image
              className="object-cover "
              alt="postImage"
              src={postData.img}
              fill
            />
          </div>
        )}
        <p className="[writing-mode:vertical-rl] text-sm m-auto  w-[10%]">
          nov
          {/* {postData.createdAt.toString()} */}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h2>{postData.title}</h2>
        <p className="text-sm truncate text-gray-300 font-thin">
          {postData.desc}
        </p>
        <Link className="underline" href={`/blog/${postData.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
