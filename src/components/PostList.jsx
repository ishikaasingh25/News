import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import Spinner from "./Spinner";
import { useLoaderData } from "react-router";
const PostList=()=>{
  const postList=useLoaderData();

return(
  <>
  {/* {fetching && <Spinner/>} */}
  {postList.length===0 && <Welcome />}
  {postList.map((post)=>
  <Post key={post.id} post={post}/>)}
  </>
)
}
export const postLoader=()=>{
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
    .then(data=>{
    return data.posts;
    });
}
export default PostList;