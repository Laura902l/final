import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisterForm = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow-lg' style={{ width: '500px', height: '650px' }}>
        <h2 className='text-center mb-3'>Register</h2>
        <p className='text-center text-muted'>Create an account to continue!</p>
        <form>
          <div className='mb-3'>
            <label className='form-label'>First Name</label>
            <div className='input-group'>
              <span className='input-group-text'><FaUser /></span>
              <input type='text' className='form-control' placeholder='First Name' required />
            </div>
          </div>

          <div className='mb-3'>
            <label className='form-label'>Last Name</label>
            <div className='input-group'>
              <span className='input-group-text'><FaUser /></span>
              <input type='text' className='form-control' placeholder='Last Name' required />
            </div>
          </div>

          <div className='mb-3'>
            <label className='form-label'>Age</label>
            <input type='number' className='form-control' placeholder='Age' required />
          </div>

          <div className='mb-4'>
            <label className='form-label'>Status</label>
            <select className='form-select' required>
              <option value='' disabled selected>Select your status</option>
              <option value='student'>Student</option>
              <option value='teacher'>Teacher</option>
              <option value='parent'>Parent</option>
              <option value='admin'>Admin</option>
              <option value='admin'>Other</option>

            </select>
          </div>

          <Link to='/registerStep2'>
            <button type='submit' className='btn w-100 ' to='/registerStep2'>
              Next     </button>
          </Link>

        </form>
        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">or</span>
          <hr className="flex-grow-1" />
        </div>
        <div className='text-center mt-1'>
          <p>Already have an account? <Link to='/' className='text-decoration-none text-dark fw-bold'>Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
