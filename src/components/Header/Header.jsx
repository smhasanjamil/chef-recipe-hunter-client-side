import React, { useContext, useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);

    // Logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful.')
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='nav-container'>

            <nav className="navbar mx-auto md:container">
                <div className="navbar-logo">
                    <Link to="/">Fork And Knife</Link>
                </div>
                <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/register">Register</Link>
                    </li>
                    {user ?
                        <span className='flex flex-row gap-5 items-center'>
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="btn btn-warning">Logout</button>
                        </span>
                        :
                        <></>}
                </ul>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="navbar-icon"></span>
                    <span className="navbar-icon"></span>
                    <span className="navbar-icon"></span>
                </div>
            </nav>

        </div>
    );
};

export default Header;