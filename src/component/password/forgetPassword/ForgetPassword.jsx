import React from 'react';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ForgetPassword = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow' style={{ width: '500px', height: '450px' }}>
        <h2 className='text-center mb-3 mt-5'>Forgot Password?</h2>
        <p className='text-center text-muted'>Enter your Gmail to reset your password.</p>

        <form>
          <div className='mb-3'>
            <label className='form-label  mt-2'>Gmail</label>
            <div className='input-group'>
              <span className='input-group-text'><FaUser /></span>
              <input type="email" className='form-control' placeholder='Enter your Gmail' required />
            </div>
          </div>



          <Link to='/enterCode'>
            <button type='submit' className='btn w-100 mt-4'>
              Submit      
             </button>
          </Link>



        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
