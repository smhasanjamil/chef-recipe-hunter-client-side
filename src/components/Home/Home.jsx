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


            <div className='mx-auto container my-10'>
                <div className='text-center'>
                    <h1 className='font-bold text-5xl'>Amazing Blog</h1>
                    <p className='my-4'>From kitchen to your screen - explore our delectable world of food and recipes</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/xLxSrXZ/04.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">5 Healthy and Delicious Vegetarian Recipes for a Nutritious Meal</h2>
                            <p>Looking for some vegetarian recipe inspiration? Check out our hand-picked selection of healthy and delicious veggie dishes that are sure to please your taste buds and nourish your body</p>
                            <div className="card-actions">
                                <button className="btn">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/2dz88W6/05.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Quick and Easy Breakfast Recipes to Start Your Day Right</h2>
                            <p>Don't skip breakfast - fuel your day with these simple and tasty breakfast recipes that are ready in no time. From smoothie bowls to breakfast sandwiches, we've got you covered!</p>
                            <div className="card-actions">
                                <button className="btn">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/Y0cj5NT/06.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">International Flavors: A Culinary Tour of Global Cuisines</h2>
                            <p>Embark on a culinary journey around the world with our selection of international recipes that bring the flavors of different cultures to your plate. From Thai curries to Italian pasta dishes, expand your culinary horizons and satisfy your taste buds.</p>
                            <div className="card-actions">
                                <button className="btn">Learn More</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/nm240wC/07.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Indulge Your Sweet Tooth: Decadent Dessert Recipes You Can't Resist</h2>
                            <p>Life is short, so why not treat yourself to some delicious desserts? From classic cakes to creative confections, these dessert recipes are sure to satisfy your sweet tooth and leave you wanting more.</p>
                            <div className="card-actions">
                                <button className="btn">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Home;