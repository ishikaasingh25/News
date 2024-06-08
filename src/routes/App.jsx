

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Second from '../components/Second';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Form from '../components/Form_Submit';
import PostList from '../components/PostList';
import { useState } from 'react';
import PostListProvider from '../store/post-list-store';
import { Outlet } from "react-router";
function App() {

  const [selectedTab,setSelectedTab]=useState("CreatePost");


  return (
  
   <PostListProvider>
  <div className='app-container'>
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='page'>
        <Second></Second> 
        {/* {selectedTab==="Home"?<PostList/>:<Form/> } */}
        <Outlet></Outlet>
        <Footer/>
     </div>
   </div>
  </PostListProvider>
   
  )
}
export default App;
