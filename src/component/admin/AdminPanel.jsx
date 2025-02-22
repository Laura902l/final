// import React, { useState } from 'react';
// import {GiHamburgerMenu} from 'react-icons/gi'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../admin/admin.css';
// import logo from '../assets/logo-removebg-preview.png'

// const AdminPanel = ({show}) => {
//     return (
//         <div className={show ? 'sidenav active' : 'sidenav'}>

//             <div className='sidenav active'>
//                 <img src={logo} alt="logo" className="logo"/>
//                 <ul>
//                     <li>
//                         <a href="/">School Data</a>
//                     </li>
//                     <li>
//                         <a href="/">Student</a>
//                     </li>
//                     <li>
//                         <a href="/">Home</a>
//                     </li>
//                 </ul>

//             </div>
//         </div>

//     );
// };

// export default AdminPanel;
import React from 'react';
import '../admin/admin.css';
import logo from '../assets/logo-removebg-preview.png';
import SchoolData from './SchoolData';

const AdminPanel = ({ show }) => {
    return (

        <div className={show ? 'sidenav active' : 'sidenav'}>
            <div className="sidenavbar">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li><a href="/">School Data</a></li>
                    <li><a href="/">Student</a></li>
                    <li><a href="/register">Registration</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div className='main'>
                <div path="/" exact={true} component={SchoolData}></div>

            </div>
        </div>


    );
};

export default AdminPanel;
