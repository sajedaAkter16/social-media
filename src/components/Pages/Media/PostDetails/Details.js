import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const user=useLoaderData()
    console.log(user)
    return (
        <div>
           {user.content}
        </div>
    );
};

export default Details;