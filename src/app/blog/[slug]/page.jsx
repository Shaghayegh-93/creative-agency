import React from "react";
import Image from "next/image";

const SingleBlogPage = () => {
  return (
    <div className="flex gap-20 min-h-screen ">
      <div className="relative h-[calc(100vh-200px)] basis-1/4 hidden md:block">
        <Image
          src="https://images.pexels.com/photos/1122414/pexels-photo-1122414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        />
      </div>
      <div className="md:basis-3/4 basis-full mt-10 md:mt-0 flex flex-col gap-10">
        <h2 className="font-bold text-2xl md:text-5xl">Title</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative rounded-full w-[50px] h-[50px]">
            <Image
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-300 ">Author</span>
              <span>thery jeferxok</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-300 ">Published</span>
              <span>11-55-55245</span>
            </div>
          </div>
        </div>
        <p>desc</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
