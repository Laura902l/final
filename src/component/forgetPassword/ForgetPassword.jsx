import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Forgot Password?</h1>
        <div className='input-box'>
          <input type="text" placeholder='Gmail' required />
          <FaUser className='icon' />
        </div>
      
     
        <button type="submit"><Link to="/enterCode">Submit</Link></button>
        <div className='register-link'>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
