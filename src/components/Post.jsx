import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post=({post})=>{
  const {deletePost}=useContext(PostList);
  return(
    <div className="card post-card" style={{width: "30rem"}}>
  <div class="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={()=>deletePost(post.id)}>
      
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
  
    {post.tags.map(tag=><span key={tag} class="badge text-bg-primary tag_badge">{tag}</span>)}

    <div className="alert alert-success reaction" role="alert"> {`${post.userID}'s post has ${post.reaction} reactions `}
    </div>
  </div>

</div>
  )
}
export default Post;