import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Media = () => {
  const { user } = useContext(AuthContext);

  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("http://localhost:5000/posts")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        }),
  });
  return (
    <div class="grid grid-cols-7 gap-4">
      <div class="col-start-3 col-end-6 ...">
        {posts.map((post) => (
          <div className="card w-full my-4 bg-base-100 shadow-xl border border-2 border-red-200">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
