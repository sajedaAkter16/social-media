import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({about}) => {
    return (
        <div>
             {/* <div className="mr-12 border border-2 border-orange-300 w-32 rounded-md text-xl text-center p-2">
    <Link to={`/profile/${about._id}`}>
    <button >Edit Profile</button>

    </Link>

      </div> */}
             
          <div className="bg-slate-300 w-full max-h-full">
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
    );
};

export default Profile;