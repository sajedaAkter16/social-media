import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const PostBanner = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // const imgKey=process.env.REACT_APP_imgKey;
 
  const handlePost=data=>{
    const image=data.image[0];
    const formData=new FormData();
    formData.append('image',image)
    
    fetch('https://api.imgbb.com/1/upload?key=0ae9dba6e463457e8ea1da155e56d28d',{
      method:"POST",
      body:formData
    })
   .then(res=>res.json())
   .then(imgData=>{
    if(imgData.success){
     
       const image=imgData.data.display_url;
        const content=data.content
        console.log(image,content)
        savePost(content,image)
      
     toast.success('Successfully posted')
      
    }})

    // all post are save to databse
    .catch(err=>console.log(err))
   const savePost=(content,image)=>{
    const post={content,image};
    
    fetch('http://localhost:5000/posts', {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(post)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
   }

  }
    return (
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handlePost)} className="card-body">
        <div className="form-control">
        <textarea {...register('content')} className="textarea textarea-secondary  w-80 h-24" placeholder="What's your mind"></textarea>
        </div>
        <div className="form-control" >
        <div className="grid grid-cols-3 gap-2">
  <div>
    <p>Video</p>
  </div>
  {/* <!-- ... --> */}
  <div >
  <input type="file" {...register('image')} placeholder="" className="input w-28 max-w-xs" />
  </div>
  <div>09</div>
</div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default PostBanner;