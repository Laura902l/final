import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const EnterCode = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/resetPassword');
  };

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 shadow' style={{ maxWidth: '500px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <h2 className='text-center mb-3 mt-5'>Enter your code</h2>
          <p className='text-center mb-5 mt-4'>Please  enter the address associated  with your account</p>

          <div className='d-flex justify-content-between mb-4'>
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type='text'
                className='form-control text-center'
                maxLength='1'
                style={{ width: '60px', height: '60px' }}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                required
              />
            ))}
          </div>

          <Link to='/resetPassword'>
            <button type='/resetPassword' className='btn w-100 mt-2'>

              Confirm
            </button>
          </Link>



        </form>
      </div>
    </div>
  );
}

export default EnterCode;
