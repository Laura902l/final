// import React, { useState } from 'react';
// import './LoginForm.css';
// import { FaUser } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { FiEye, FiEyeOff } from "react-icons/fi";

// export const LoginForm = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(prevState => !prevState);
//     };

//     return (
//         <div className='wrapper'>
//             <form action="">
//                 <h1>Sign in to your Account</h1>
//                 <p className='text'>Enter your email and password to log in </p>
//                 <div className='input-box'>
//                     <input type="text" placeholder='Username' required />
//                     <FaUser className='icon' />
//                 </div>
//                 <div className='input-box'>
//                     <input 
//                         type={showPassword ? "text" : "password"} 
//                         placeholder='Password' 
//                         required 
//                     />
//                     <span className="icon" onClick={togglePasswordVisibility}>
//                         {showPassword ? <FiEyeOff /> : <FiEye />}
//                     </span>
//                 </div>
//                 <div className='remember-forget'>
//                     <label><input type="checkbox" />Remember me</label>
//                     <a href="/forgetPassword">Forgot password</a>
//                 </div>
//                 <button className="submitBtn" type="submit">Login</button>

//                 <div className='register-link'>
//                     <p>Don't have an account? <Link to="/register">Register</Link></p>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi";
import './LoginForm.css';

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
            <div className='card p-4 shadow' style={{ width: '500px', height: '650px' }}>
                <h3 className='text-center mb-4 mt-5'>Sign in to your Account</h3>
                <p className='text-center mb-4 text-muted mt-3'>Enter your email and password to log in</p>
                <form>
                    <div className='mb-4 position-relative'>
                        <input type='text' className='form-control' placeholder='Username' required />
                        <FaUser className='position-absolute top-50 end-0 translate-middle-y me-3 text-muted' />
                    </div>
                    <div className='mb-3 position-relative'>
                        <input
                            type={showPassword ? "text" : "password"}
                            className='form-control'
                            placeholder='Password'
                            required
                        />
                        <span className='position-absolute top-50 end-0 translate-middle-y me-3 text-muted' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </span>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div>
                            <input type='checkbox' id='rememberMe' />
                            <label className='ms-2' htmlFor='rememberMe'>Remember me</label>
                        </div>
                        <Link to='/forgetPassword' className='text-decoration-none text-dark fw-normal'>Forgot password?</Link>
                    </div>
                    <button className='btn w-100 mt-4' type='submit'>Login</button>
                    <div className="d-flex align-items-center my-3">
                        <hr className="flex-grow-1" />
                        <span className="mx-2 text-muted">or</span>
                        <hr className="flex-grow-1" />
                    </div>

                    <div className='text-center mt-3'>
                        <p>Don't have an account? <Link to='/register' className='text-decoration-none text-dark fw-bold'>Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
