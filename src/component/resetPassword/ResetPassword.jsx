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

export const ResetPassword = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Reset Password</h1>

        <div className='input-box'>
          <input type="password" placeholder='Enter new password' required />
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Confirm new password' required />
        </div>


        <button type="submit">Confirm</button>
        <div className='register-link'>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
