import {createContext, useReducer,useState } from "react";

export const PostList=createContext(
  {
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},

  }
);

const postListReducer=(currPostList,action)=>{
  console.log(action)
  console.log(currPostList)
  let newPostList=currPostList;
  if(action.type==='DELETE_POST'){
    
    newPostList=currPostList.filter(post=>post.id!==action.payload.postID)
  }
 
  else if(action.type==='ADD_INITIAL_POSTS'){
    newPostList=action.payload.posts;
  }
  else if(action.type==='ADD_POST'){
    newPostList=[action.payload, ...currPostList]
  }
  return  newPostList;

}

const PostListProvider=({children})=>{
  const [postList,dispatchPostList]=useReducer(postListReducer,[]);

 


  const addPost=(post)=>{
    console.log('add post called',post)
    dispatchPostList({
      type:'ADD_POST',
      payload:post,
    })
  };





  const deletePost=(postID)=>{
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postID,
      }
    })
  };

 
  return (
  <PostList.Provider
   value={{ postList,addPost,deletePost} }>
    {children}
   </PostList.Provider>
  )
}

export default PostListProvider;