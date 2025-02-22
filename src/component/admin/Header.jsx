// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminPanel from './AdminPanel';
// import '../admin/admin.css';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { username } from 'react'
// const Header = () => {
//     const [showNav, setShowNav] = useState
//         (false)
//     return (
//         <div>
//             <header>
//                 <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />



//             </header>
//             <AdminPanel show={showNav} />

//         </div>

//     );
// };
// export default Header;
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminPanel from './AdminPanel';
// import '../admin/admin.css';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaBell } from "react-icons/fa";

// const Header = () => {
//     const [showNav, setShowNav] = useState(false);

//     return (
//         <div>
//             <header>
//                 <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
//                 <div className="right-section">
//                     <FaBell className="bell-icon" />
//                 </div>
//             </header>
//             <AdminPanel show={showNav} />
//         </div>
//     );
// };

// export default Header;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminPanel from './AdminPanel';
import '../admin/admin.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa";

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <header className="header">
                <GiHamburgerMenu className="menu-icon" onClick={() => setShowNav(!showNav)} />
                <div className="right-section">
                    <FaBell className="bell-icon" />
                </div>
            </header>
            <AdminPanel show={showNav} />
        </div>
    );
};

export default Header;
