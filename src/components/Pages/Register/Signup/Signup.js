import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser,updateUser}=useContext(AuthContext);

  const imgKey='0ae9dba6e463457e8ea1da155e56d28d'
  // process.env.REACT_APP_imgKey;
 
  const handleSignup = data => {
    const image=data.image[0];
    
    const formData=new FormData();
    formData.append('image',image)
    
    fetch(`https://api.imgbb.com/1/upload?key=${imgKey}`,{
      method:"POST",
      body:formData
    })
   .then(res=>res.json())
   .then(imgData=>{

   if(imgData.success){
    const image=imgData.data.display_url
    createUser(data.email,data.password)
    .then((result)=>{
      console.log(result)

      const name=data.first_name + ' ' + data.last_name
      const number=data.number
     console.log(number)
       updateUser(name,number,image)
       .then(()=>{
        // saveUser(name,data.email)
         toast.success("User created Successfully")
       })
       .catch(err=>console.log(err))
    })
    .catch(error=>console.log(error))
   
   }
   
  
   })
   .catch(console.log())
  

  //  const saveUser=(email,name)=>{
  //   const user={email,name};

  //   fetch('http://localhost:5000/users', {
  //     method:"POST",
  //     headers:{
  //       'content-type':'application/json'
  //     },
  //     body:JSON.stringify(user)
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
      
  //   })
  //  }
  };
    return (
        <div className="hero min-h-screen bg-base-200 w-full">
         
          <div className="card flex-shrink-0 w-full max-w-sm lg:max-w-xl md:max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleSignup)} className="card-body">
              <h1 className='text-indigo-900 text-2xl text-center font-black'>Create a new account</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">First Name</span>
                </label>
                <input type="text" {...register('first_name',{ required: "First Name is required" })} placeholder="First Name" className="input input-bordered " />
                {errors.first_name && <p role="alert" className='text-red-600'>{errors.first_name?.message}</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">Last Name</span>
                </label>
                <input type="text" {...register('last_name')} placeholder="Last Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">Number</span>
                </label>
                <input type="number" 
                {...register("number",
                { required: "Number is required" ,
                // maxLength: { value: 11, message: "Number must be 11 digit" },

                })} placeholder="number" className="input input-bordered" />
                {errors.number && <p role="alert" className='text-red-600'>{errors.number?.message}</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">Email</span>
                </label>
                <input type="email" {...register('email',{ required: "Email is required" })} placeholder="Email" className="input input-bordered" />
                {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">Password</span>
                </label>
                <input type="password"
                 {...register('password',{ required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 characters long" },
                  pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }

              })} placeholder="new password" className="input input-bordered" />
                {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}

              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text lg:text-xl">Confirm Password</span>
                </label>
                <input type="password" {...register('confirm_password',{ required: "confirm password is required" })} placeholder="confirm password" className="input input-bordered" />
                {errors.confirm_password && <p role="alert" className='text-red-600'>{errors.confirm_password?.message}</p>}

              </div> */}
              <div className="form-control mt-6">
                <label htmlFor='signup-modal' className='btn'>Submit</label>
              {/* <button className="btn btn-primary w-96 mx-10 mt-4" >Signup</button> */}

              </div>
              <div>
             {/* signup Modal */}
<input type="checkbox" id="signup-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="signup-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
              <div className='w-52 h-52 border-2 border-orange-300  rounded-full relative mx-auto'>
             
              <svg className='ml-20 mt-8 h-9 w-9' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>
                <p className='ml-8 mt-2'>Choose profile picture</p>
              <input {...register('image')} type="file" className="file-input file-input-bordered absolute bottom-12 left-12 file-input-primary w-28  max-w-xs" />

              </div>
                  <button className="btn btn-primary w-96 mx-10 mt-4" >Signup</button>
               </div>

</div>
            </div>
            </form>
           
          </div>
      </div>
    );
};

export default Signup;