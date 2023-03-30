import React from 'react';
import Post from './Post/Post';

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
  <div>01</div>
  <div>
    <Post/>
    
  </div>
 
  <div>09</div>
</div>

    );
};

export default Home;