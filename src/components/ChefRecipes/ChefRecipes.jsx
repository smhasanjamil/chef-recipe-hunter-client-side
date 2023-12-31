import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleChefRecipes from '../SingleChefRecipes/SingleChefRecipes';

import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import LazyLoad from 'react-lazy-load';

const ChefRecipes = () => {
    const [chef, setChef] = useState("");
    const { id } = useParams();
    // console.log('Id: ', id);

    useEffect(() => {
        fetch(`https://forkandknife-server-smhasanjamil23-gmailcom.vercel.app/allData/${id}`)
            .then(res => res.json())
            .then(data => setChef(data.chef))
    }, []);

    // console.log(chef);
    return (
        <div className='mx-auto mb-10'>


            <div className="hero min-h-screen" style={{
                backgroundImage: `url(${chef.picture})`,
                backgroundSize: "cover",
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{chef?.name}</h1>
                        <p className="mb-5">{chef?.bio}</p>
                        <p className="mb-5">Num of Recipes: {chef?.numRecipes}</p>
                        <p className="mb-5">Experience: {chef?.experience} years</p>
                        <div className='flex gap-2 flex-row items-center justify-center my-4'>
                            <Rating
                                readonly
                                placeholderRating={chef?.likes}
                                emptySymbol={<FaRegStar />}

                                placeholderSymbol={<FaStar />}
                                fullSymbol={<FaStar />}
                            ></Rating>
                            <span>{chef?.likes}</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-full">
                    <img className="w-full h-full object-cover rounded-xl" src={chef.picture} alt="Image" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className="font-bold text-5xl">Name: {chef?.name}</h1>
                    <p className="font-bold text-xl">About: {chef?.bio}</p>
                    <p className="font-bold text-xl">Num of Recipes: {chef?.numRecipes}</p>
                    <p className="font-bold text-xl">Experience: {chef?.experience} years</p>
                    <div className='flex gap-2 flex-row items-center my-4'>
                        <Rating
                            readonly
                            placeholderRating={chef?.likes}
                            emptySymbol={<FaRegStar />}

                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        ></Rating>
                        <span>{chef?.likes}</span>
                    </div>
                </div>
            </div> */}

<LazyLoad>
            <div className='text-center my-10 text-5xl font-bold underline'><h1>Recipes </h1></div>
            </LazyLoad>
            <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">




                {chef?.recipes?.map((rec, index) => <SingleChefRecipes rec={rec} key={index}></SingleChefRecipes>)}
            </div>

          



        </div>
    );
};

export default ChefRecipes;