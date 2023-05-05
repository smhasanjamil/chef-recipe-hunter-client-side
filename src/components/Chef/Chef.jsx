import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';


const Chef = () => {
    const [chefData, setChefData] = useState([]);


    useEffect(() => {
        fetch('https://forkandknife-server-smhasanjamil23-gmailcom.vercel.app/allData')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    // console.log(chefData);

    return (
        <div className='mx-auto container my-10 '>
            <div className='text-center text-5xl font-bold underline'><h1>Chef</h1></div>
            <div>
         
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>


                    {chefData?.map((allchef) => (
                        <div key={allchef.id}>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={allchef.picture} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{allchef.name}</h2>
                                    <p>Experience: {allchef.experience} Year</p>
                                    <p>Number Of Recipes: {allchef.numRecipes} </p>
                                    <div className='flex gap-2 flex-row items-center justify-center'>
                                        <Rating
                                            readonly
                                            placeholderRating={allchef.likes}
                                            emptySymbol={<FaRegStar />}

                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        ></Rating>
                                        <span>{allchef.likes}</span>
                                    </div>

                                    <div className="card-actions">
                                        <Link to={`/chef/${allchef?.id}`} className="btn">View Recipes</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}




                </div>
            </div>


        </div>

    );
};

export default Chef;