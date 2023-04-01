import React from 'react';
import Post from './Post/Post';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-1 ">
  <div className=''>
    <LeftSide/> 
  </div>
  <div className=' '>
    <Post/>
    
  </div>
  <div>
    <RightSide/>
  </div>

</div>

    );
};

export default Home;