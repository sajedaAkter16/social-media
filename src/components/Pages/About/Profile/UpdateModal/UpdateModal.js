import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateModal = () => {
    const user=useLoaderData()
    console.log(user)
    return (
        <div>
          
        </div>
    );
};

export default UpdateModal;