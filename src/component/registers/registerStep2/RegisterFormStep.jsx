import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisterFormStep = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card p-4 shadow' style={{ width: '500px', height: '650px' }}>
        <form>
          <h1 className='text-center mb-4 mt-5'>Register</h1>
          <p className='text-center text-muted mb-5'>Create an account to continue!</p>

          <div className='mb-4 position-relative'>
            <input type="email" className='form-control' placeholder='Gmail' required />
            <FaUser className='position-absolute top-50 end-0 translate-middle text-muted me-3' />
          </div>

          <div className='mb-4 position-relative'>
            <input
              type={showPassword ? "text" : "password"}
              className='form-control'
              placeholder='Password'
              required
            />
            <span className='position-absolute top-50 end-0 translate-middle-y me-4' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className='mb-4 position-relative'>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className='form-control'
              placeholder='Confirm password'
              required
            />
            <span className='position-absolute top-50 end-0 translate-middle-y me-4' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>


          <Link to="/registerStep3">
            <button type='submit' className='btn w-100 mb-2'>
              Next
            </button>
          </Link>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">or</span>
            <hr className="flex-grow-1" />
          </div>
          <p className='text-center mt-3'>
            Already have an account? <Link to="/registerStep3">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterFormStep;
