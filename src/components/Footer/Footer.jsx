import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="footer footer-center p-10 bg-gray-900 text-white rounded">
                <div>
                    <h1 className='font-bold text-3xl'>Fork And Knife</h1>
                    <p className='text-lg'>Bringing delicious recipes to your kitchen.</p>
                </div>
                <div className="grid grid-flow-col gap-4">
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/blog" className="link link-hover">Blog</Link>
                    <Link to="/chef" className="link link-hover">All Chef</Link>
                    <Link to="/about" className="link link-hover">About Us</Link>
                    <Link to="#" className="link link-hover">Contact</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="#" ><FaYoutube className='h-8 w-8' /></Link>
                        <Link to="#" ><FaTwitter className='h-8 w-8' /></Link>
                        <Link to="#" ><FaFacebook className='h-8 w-8' /></Link>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Fork And Knife</p>
                </div>
            </footer>


        </div>
    );
};

export default Footer;