import React from "react";
import Image from "next/image";
import {
  getSinglePostsData,
  getSingleUser,
} from "../../../../server/utils/fetchData";

export const metadata = {
  title: "singleBlogPage",
  description: "Generated by create next app"
};

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  const singlePost = await getSinglePostsData(slug);
  const userInfo = await getSingleUser(singlePost.userId);

  return (
    <div className="flex gap-20 min-h-screen ">
      {singlePost.img && (
        <div className="relative h-[calc(100vh-200px)] basis-1/4 hidden md:block">
          <Image src={singlePost.img} fill />
        </div>
      )}
      <div className="md:basis-3/4 basis-full mt-10 md:mt-0 flex flex-col gap-10">
        <h2 className="font-bold text-2xl md:text-5xl">{singlePost.title}</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative rounded-full w-[50px] h-[50px]">
            <Image
              src={singlePost.img ? singlePost.img : "./noavatar.png"}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-300 ">Author</span>
              <span>{userInfo.username}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-gray-300 ">Published</span>
              <span>{singlePost.createdAt.toString().slice(4, 16)}</span>
            </div>
          </div>
        </div>
        <p className="text-white">{singlePost.desc}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
