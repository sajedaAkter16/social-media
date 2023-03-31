import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import CommentShow from "./CommentShow/CommentShow";
import { Link } from "react-router-dom";

const Media = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

 
  function comment() {
    const comment = document.getElementById("comment");
    const newComment = comment.value;
    console.log(newComment);
    const commentDetails={
      comment:newComment,
      commenter_name:user.displayName,
      commenter_image:user.photoURL

    }
   console.log(commentDetails)
    fetch('http://localhost:5000/comments', {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(commentDetails)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){

        toast.success('comment uploaded')
      
      }
      console.log(data)
    })

  }
  // const handleComment=(data)=>{

  //   console.log(data)

  // }
  return (
    <div className="grid grid-cols-7 gap-4 ">
      <div className="col-start-3 col-end-6 ...">
        {posts.map((post) => (
          <div className=" relative card w-full my-4 bg-base-100 shadow-xl border border-2 border-red-200">
            <div className="card-body">
              <div className="flex">
                {user?.uid ? (
                  <>
                    <div className="avatar online ">
                      <div className="w-20 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="avatar offline">
                      <div className="w-20 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </>
                )}
                <h2 className="card-title ml-3">{user?.displayName}</h2>
              </div>
              <p>{post.content}</p>
            </div>
            <figure>
              <img src={post.image} alt="" className="w-full rounded-md m-4" />
            </figure>
            <div className="grid grid-cols-3 gap-2 p-1 my-2 mx-3 rounded bg-purple-200 text-xl">
              <div className="ml-5">
                <span className="heart" id="heart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </span>
              </div>

              <div>
                <p>
                  <button>Comment</button>
                </p>
              </div>
              <div>

                  <Link to={`/details/${post._id}`}><button >Details</button>
</Link>
              </div>
            </div>
            <div className="divider mx-12"></div>
            <div className=" flex ">
              {user?.uid ? (
                <>
                  <div className="avatar online mr-3 ml-6">
                    <div className="w-12  rounded-full">
                      <img
                        src={user?.photoURL}
                        alt=""
                        title={user.displayName}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="avatar offline">
                    <div className="w-12 rounded-full">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                </>
              )}
              <input
              {...register('comment')}
                type="text"
                id="comment"
                placeholder="Your comment"
                className="input input-bordered w-full max-w-xs text-red-900"
              />

              <button
                onClick={comment}
                className="btn btn-outline btn-warning ml-2 h-6 -mb-9"
                id="btn-post"
              >
                post
              </button>
            </div>
            <CommentShow/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
