import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import './Home.css'
import Chef from '../Chef/Chef';
import { Link } from 'react-router-dom';

const Home = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    return (
        <div className='mx-auto'>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("../../../public/pexels-horizon-content-3762069.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover Authentic Italian Cuisine</h1>
                        <p className="mb-5">Indulge in the rich and vibrant flavors of Italy with our authentic Italian cuisine recipes and cooking tips. Explore the best of Italian food and experience the true essence of Italian cooking with A Taste of Italy</p>
                        <button className="btn btn-primary"> <Link to="/chef">Explore</Link> </button>
                    </div>
                </div>
            </div>

            <Chef />

        </div>
    );
};

export default Home;