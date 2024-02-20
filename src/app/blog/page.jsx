import React from "react";
import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  return (
    <div className="grid grid-cols-blog-grid gap-14 ">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogPage;
