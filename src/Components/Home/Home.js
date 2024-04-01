// components/Home.js
import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <div className="header">
         
          <p className='sign' ><Link to="/signup" >Sign up</Link></p>
          <p className='question'>Do you already have an account? <Link to="/login" >Log in</Link></p>
       </div>
       <div className='title_1'>
        <h2>Welcome to Our Platform!</h2>
        </div>
        <p className='description'>A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. The primary responsibility of a front-end developer is to ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.</p>
    </div>
  );
}

export default Home;
