import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import { toast } from "react-toastify";

const About = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // user info add to database
    const handleInfo=(data)=>{
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(()=>{
            toast.success('Added user info')
        })
        console.log(data)
    }
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="bg-slate-200 flex justify-items-center items-center	">
        <div className="avatar ">
          <div className="w-20 rounded-full mx-6 mt-2">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-red-900 text-3xl font-bold ">{user?.displayName}</h3>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-0">
        <div className="">
          {/* <button className="btn btn-primary w-96 mt-3 ml-5">Add Your Information</button> */}
        {/* The button to open modal */}
<label htmlFor="about-modal" className="btn btn-primary w-96 mt-3 ml-5">Add Your Information</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="about-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="about-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
      <form onSubmit={handleSubmit(handleInfo)} className="card-body">
        <div className="form-control">
         
          <input type="text" {...register('name')} defaultValue={user?.displayName} placeholder="Enter name" className="input input-bordered" />
        </div>
        <div className="form-control">
         
          <input type="email" {...register('email')} defaultValue={user?.email} placeholder="Enter email" className="input input-bordered" />
        </div>
        <div className="form-control">
    
          <input type="text" {...register('current-address')} placeholder="Enter current address" className="input input-bordered" />
        
        </div>
        <div className="form-control">
    
          <input type="text" {...register('home-address')} placeholder="Enter home address" className="input input-bordered" />
        
        </div>
        <div className="form-control">
    
          <input type="text" {...register('univercity')} placeholder="Enter univercity" className="input input-bordered" />
        
        </div>
        <div className="form-control">
    
    <input type="number" {...register('number')} defaultValue={user?.phoneNumber} placeholder="Enter number" className="input input-bordered" />
  
  </div>
        <div>
        <p>Gender</p>
  <input type="radio" {...register('gender')} id="male" name="gender" value="male"/>
  <label for=",ale">Male</label><br/>
  <input type="radio" {...register('gender')} id="female" name="gender" value="female"/>
  <label for="female">Female</label><br/>          
  </div>
 
        <div className="form-control">
    
          <input type="date" {...register('date of birth')} placeholder="Enter date of birth" className="input input-bordered" />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>

        <div className=" w-4/5">
            <div>
            <div className="bg-slate-300">
                <h3 className="text-xl">Name:</h3>
            </div>
            <div className="bg-slate-300">
                <h3 className="text-xl">Email:</h3>
            </div>
            <div className="bg-slate-300">
                <h3 className="text-xl">Address:</h3>
            </div>
            <div className="bg-slate-300">
                <h3 className="text-xl">University:</h3>
            </div>
            
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;
