import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ResetPassword = () => {
  const [password] = useState('');
  const [confirmPassword] = useState('');
  const [setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Password reset successful');
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow' style={{ width: '500px', height: '650px' }}>
        <h2 className='text-center mb-3 mt-5'>Reset Password</h2>
        <p className='text-center mb-3 mt-1'>Please  enter the address associated  with your account</p>

        <form onSubmit={handleSubmit}>
          <div className='mb-4 mt-4 position-relative'>
            <label className='form-label'>New Password</label>


            <div className='mb-4 position-relative'>
              <input
                type={showPassword ? "text" : "password"}
                className='form-control'
                placeholder='New password'
                required
              />
              <span className='position-absolute top-50 end-0 translate-middle-y me-4' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>


          {/* Поле для подтверждения пароля */}
          <div className='mb-4 mt-4 position-relative'>
            <label className='form-label'>Confirm Password</label>

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
          </div>
          {/* Кнопка подтверждения */}
          <button type='submit' className='btn w-100 mt-4' disabled={password !== confirmPassword}>
            Confirm
          </button>

          {/* Разделитель "or" */}
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">or</span>
            <hr className="flex-grow-1" />
          </div>

          {/* Ссылка на логин */}
          <div className='text-center mt-3'>
            <p>Already have an account? <Link to='/' className='fw-bold text-decoration-none text-dark'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
