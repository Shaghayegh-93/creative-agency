import React from "react";
import BlogCard from "@/components/BlogCard";
import {getPostsData} from "../../../server/utils/fetchData";
// import { connectTodb } from "../../../server/utils/dbConnect";
// import { Post } from "../../../server/models/models";

const BlogPage = async () => {
  const posts = await getPostsData();
  console.log("posts", posts);
  return (
    <div className="grid grid-cols-blog-grid gap-14 ">
      {posts?.map((post) => (
        <BlogCard key={post?.id} postData={post} />
      ))}
    </div>
  );
};

export default BlogPage;
