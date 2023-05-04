import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            
            <div class="flex flex-col gap-4 justify-center items-center h-screen">
                <h1 className='font-bold text-5xl'>Oops! Page not found.</h1>
                <p className='text-lg'>It looks like the page you were looking for does not exist.</p>
                <button className="btn btn-lg"><Link to="/">Back To Home</Link></button>
            </div>
        </div>
    );
};

export default NotFound;