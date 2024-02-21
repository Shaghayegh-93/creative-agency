import { connectTodb } from "./dbConnect";
import { Post, User } from "../models/models";

export async function getPostsData() {
  try {
    connectTodb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch data");
  }
}

export async function getSinglePostsData(slug) {
  try {
    connectTodb();
    const posts = await Post.findOne({ slug });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch data");
  }
}

export async function getUsersData() {
  try {
    connectTodb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch data");
  }
}

export async function getSingleUser(id) {
  try {
    connectTodb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch data");
  }
}
