import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CommentShow = () => {
    const {user}=useContext(AuthContext)
    const { data: comments = [] } = useQuery({
        queryKey: ["comments"],
        queryFn: () =>
          fetch("https://social-media-server-eight-nu.vercel.app/comments")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
              return data;
            }),
      });
    return (
        <div className="mt-4">

   {
    comments.map(comment=>
       <div className='flex justify-content my-2'>
         <div className='mt-1'>
            {
                user?.uid?
                <>
                <div className="avatar online mr-3 ml-6">
                  <div className="w-10  rounded-full">
                    <img src={comment.commenter_image} alt='' title={comment.commenter_name}/>
                  </div>
                </div>
              </>
             : 
              <>
                <div className="avatar offline mr-3 ml-6">
                  <div className="w-8 rounded-full">
                    <img src={comment.commenter_image} alt=""/>
                  </div>
                </div>
              </>
            }
        </div>
        <div className='bg-gray-200 w-96 rounded-md text-orange-900 p-2'>
            <p className='text-xl'>{comment.commenter_name}</p>
            <p>{comment.comment}</p>
        </div>
       </div>
       
        
        )
   }

    </div>
)};

export default CommentShow;