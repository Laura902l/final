import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/login/LoginForm';
import RegisterForm from './component/registers/registerStep1/RegisterForm';
import RegisterFormStep from './component/registers/registerStep2/RegisterFormStep';
import RegisterFormStep3 from './component/registers/registerStep3/RegisterFormStep3';
import ResetPassword from './component/password/resetPassword/ResetPassword';
import ForgetPassword from './component/password/forgetPassword/ForgetPassword';
import EnterCode from './component/password/enterCode/EnterCode';
import Header from './component/admin/Header';

import SchoolData from './component/admin/SchoolData';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/registerStep2" element={<RegisterFormStep />} />
          <Route path="/registerStep3" element={<RegisterFormStep3 />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/enterCode" element={<EnterCode />} />
          <Route path="/admin" element={<Header />} />
          <Route path="/schoolData" element={<SchoolData />} />

        </Routes>

      </div>
    </Router>
    
  );
}

export default App;

