import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
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