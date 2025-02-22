// import './App.css';
// import LoginForm from './component/login/LoginForm';

// function App() {
//   return (
//     <div>
//      <LoginForm/>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import { useState } from 'react';
// import LoginForm from './component/login/LoginForm';
// import RegisterForm from './component/register/RegisterForm';

// function App() {
//   const [showRegister, setShowRegister] = useState(false);

//   const handleSwitchToRegister = () => {
//     setShowRegister(true); // Set to true to show the Register form
//   };

//   const handleSwitchToLogin = () => {
//     setShowRegister(false); // Set to false to show the Login form
//   };

//   return (
//     <div>
//       {showRegister ? (
//         <RegisterForm />
//       ) : (
//         <LoginForm onSwitchToRegister={handleSwitchToRegister} />
//       )}
//     </div>
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './component/login/LoginForm';
import RegisterForm from './component/register/RegisterForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

