import React, { useContext, useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
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
        <div className='nav-container bg-gray-900'>

            <nav className="navbar mx-auto md:container bg-gray-900">
                <div className="navbar-logo">
                    <NavLink to="/">Fork And Knife</NavLink>
                </div>
                <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
                    <li className="navbar-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/blog">Blog</NavLink> 
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/about">About Us</NavLink> 
                    </li>
                    {!user && <li className="navbar-item">
                        <NavLink to="/login">Login</NavLink>
                    </li>}
                    {!user && <li className="navbar-item">
                        <NavLink to="/register">Register</NavLink>
                    </li>}
                    {user ?
                        <span className='flex flex-col md:flex-row gap-5 items-center'>
                            <div className="relative">
                                <img src={user?.photoURL} alt="profile picute" className='h-12 w-12 rounded-full' />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                    <p className="text-white text-lg font-bold">{user?.displayName}</p>
                                </div>
                            </div>
                            <div><button onClick={handleLogout} className="btn btn-warning">Logout</button></div>
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