import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound-container flex justify-center mx-auto container'>
        


            <div className="card w-full">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/88jxg6W/error.jpg" alt="Shoes" className="text h-80 w-auto" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-5xl">Oops! Page not found.</h2>
                    <p>It looks like the page you were looking for does not exist.</p>
                    <div className="card-actions">
                    <button className="btn btn-lg bg-indigo-600 border-indigo-600"><Link to="/">Back To Home</Link></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NotFound;