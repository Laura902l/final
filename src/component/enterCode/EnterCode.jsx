import React from 'react';
import { Link } from 'react-router-dom';

export const EnterCode = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Verify your email</h1>
  
        <div className='containers'>
        <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
          <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
         <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
        </div>

        <button type="submit"><Link to="/resetPassword">Confirm</Link></button>
        <div className='register-link'>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
      
    </div>
  );
}

export default EnterCode;
