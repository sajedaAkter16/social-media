import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ about }) => {
  
  return (
    <div className="bg-base-200">
      <div className="ml-96 my-3 p-3">
       
<Link to={`/update/${about._id}`}>
<label htmlFor="update-modal" className="btn bg-orange-300 w-44">Edit Profile</label>
</Link>
      </div>
      <div className="card w-96  text-orange-900">
  <div className="card-body">
  <div>
          <div className="my-5">
            <h3 className="text-xl">Name:{about.name}</h3>
          </div>
          <div className="my-5">
            <h3 className="text-xl">Email:{about.email}</h3>
          </div>
          <div className="my-5">
            <h3 className="text-xl">Current Address:{about.current_address}</h3>
          </div>
          <div className="my-5">
            <h3 className="text-xl">Home Address:{about.home_address}</h3>
          </div>
          <div className="my-5">
            <h3 className="text-xl">University:{about.univercity}</h3>
          </div>
          <div className="my-5">
            <h3 className="text-xl">Gender:{about.gender}</h3>
          </div>
          <div className="my-5">
            <h3 className="text-xl">Date of birth:{about.dateOfBirth}</h3>
          </div>
          <div className=" my-5">
            <h3 className="text-xl">Number:{about.number}</h3>
          </div>
        </div>
  </div>
</div>

      
    </div>
  );
};

export default Profile;
