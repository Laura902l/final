// // src/component/register/RegisterForm.js
// import React from 'react';
// import './RegisterForm.css'; // Your custom styles
// import { FaUser, FaLock } from "react-icons/fa";

// export const RegisterForm = () => {
//     return (
//         <div className='wrapper'>
//             <form action="">
//                 <h1>Register</h1>
//                 <div className='input-box'>
//                     <input type="text" placeholder='Username' required />
//                     <FaUser className='icon' />
//                 </div>
//                 <div className='input-box'>
//                     <input type="password" placeholder='Password' required />
//                     <FaLock className='icon'/>
//                 </div>
//                 <div className='input-box'>
//                     <input type="password" placeholder='Confirm Password' required />
//                     <FaLock className='icon'/>
//                 </div>
//                 <button type="submit">Register</button>
//                 <div className='register-link'>
//                     <p>Already have an account? <a href="/login">Login</a></p>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default RegisterForm;
import React from 'react';
import './RegisterForm.css';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className='input-box'>
          <input type="text" placeholder='First Name' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type="text" placeholder='Last Name' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type="number" placeholder='Age' required />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Status' required />
        </div>
        <button type="submit"> <Link className='next_btn' to="/registerStep2">Next</Link></button>
        <div className='register-link'>
          <p>Already have an account? <Link to="/registerStep2">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
