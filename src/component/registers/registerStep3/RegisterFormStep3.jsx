import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisterFormStep3 = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <div className='card p-4 shadow' style={{ width: '500px' }}>
        <form>
          <h1 className='text-center mb-3'>Verify Your Email</h1>
          <p className='text-center text-muted'>Enter the 6-digit code sent to your email.</p>

          <div className='d-flex justify-content-between gap-2 mb-3'>
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type='text'
                maxLength='1'
                className='form-control text-center'
                style={{ width: '50px', fontSize: '1.5rem' }}
                required
              />
            ))}
          </div>
          <Link to="/">
            <button type='submit' className='btn w-100 mb-2'>
              Next
            </button>
          </Link>

          <p className='text-center mt-3'>
            Already have an account? <Link to='/' className='text-decoration-none text-dark fw-bold'>Login</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default RegisterFormStep3;
