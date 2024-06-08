import {Form, redirect} from 'react-router-dom'
const Form_submit=()=>{
  const handleSubmit=()=>{

  }
  return (
    <Form method="POST"className="post-form">
  <div class="mb-3">
    <label htmlFor="User ID" class="form-label">User ID</label>
    <input type="text" 
    name="userId"
    class="form-control" id="User-ID" placeholder="Your User-ID" />
  </div>

    <div className='mb-3'>
    <label htmlFor="title" class="form-label">Post Title</label>
    <input type="text"
    name="title"
    className="form-control" id="title" placeholder="Enter the title for the post" />
  </div>

  <div class="mb-3">
    <label htmlFor="body" class="form-label">Content</label>
    <textarea type="text" 
    name="body"
    rows="5" class="form-control" id="Content" placeholder="Tell us more about it" />
  </div>

  <div class="mb-3">
    <label htmlFor="reactions" class="form-label">Reactions</label>
    <input type="text"
     name="reactions"
     class="form-control" id="reactions" placeholder="Number of Reactions" />
  </div>

  <div class="mb-3">
    <label htmlFor="tags" class="form-label">Tags</label>
    <input type="text" 
    name="tags" 
    class="form-control" 
    id="tags" 
    placeholder="Add tags" />
  </div>


  <button type="submit" class="btn btn-primary">Post</button>
</Form>

  );
};

export async function createPostAction(data){
  const formData=await data.request.formData()
  const postData=Object.fromEntries(formData)
  postData.tags=postData.tags.split(" ");
  console.log(postData)
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData),
})
.then(res => res.json())
.then(post=>{
  console.log(post);
}
);
return redirect('/');
};


 export default Form_submit