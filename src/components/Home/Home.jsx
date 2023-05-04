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



            <div className='mx-auto container mt-10'>
                <div className='font-bold text-lg text-center'>
                    <h1>Our Services</h1>
                </div>
                <div className='mb-5'>
                    <h1 className='font-bold text-3xl text-center mt-10'>Your Go-To Food Delivery Partner</h1>
                    <p className='text-base text-center'>Our delivery service is lightning-fast, ensuring that you never have to wait long for your food to arrive. From the moment you place your order to the second it's delivered to your doorstep, we strive to make the process as quick and efficient as possible.</p>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="p-4">
                        <div className="card w-full">
                            <figure><img src="https://i.ibb.co/YXkZ2XH/01.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Fastest Delivery</h2>
                                <p>Our delivery service is lightning-fast, ensuring that you never have to wait long for your food to arrive. From the moment you place your order to the second it's delivered to your doorstep, we strive to make the process as quick and efficient as possible.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div className="card w-full">
                            <figure><img src="https://i.ibb.co/LCr25BW/02.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Wide Variety of Cuisine</h2>
                                <p>With a vast selection of cuisines from all over the world, you're sure to find something you'll love on our menu. From classic comfort food to exotic dishes you've never tried before, we've got you covered.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div className="card w-full ">
                            <figure><img src="https://i.ibb.co/b2RMDhb/03.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Easy Ordering Process</h2>
                                <p>Our ordering process is simple and hassle-free. Whether you prefer to order online, by phone, or through our mobile app, we make it easy to get the food you crave without any unnecessary complications.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </div>
    );
};

export default Home;