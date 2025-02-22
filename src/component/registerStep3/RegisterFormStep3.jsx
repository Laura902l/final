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
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const RegisterFormStep3 = () => {
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

        <button type="submit">Next</button>
        <div className='register-link'>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default RegisterFormStep3;
