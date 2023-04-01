import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateModal = () => {
    const user=useLoaderData()
   
    return (
        <div>
            {user.email}
          
        </div>
    );
};

export default UpdateModal;