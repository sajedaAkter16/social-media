import React from 'react';
import Post from './Post/Post';
import LeftSide from './LeftSide/LeftSide';

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-1 sm:flex-col">
  <div className='col sm:w-full'>
    <LeftSide/> 
  </div>
  <div className='lg:col-span-2 '>
    <Post/>
    
  </div>

</div>

    );
};

export default Home;