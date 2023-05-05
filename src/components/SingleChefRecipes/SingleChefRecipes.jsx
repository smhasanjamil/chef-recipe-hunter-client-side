import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const SingleChefRecipes = ({ rec }) => {
    const [disabled, setDisabled] = useState(false);
    // console.log(rec)

    const handleOnClick = () => {
        setDisabled(true);
        toast("Added to Favourite!");
    }
    return (
        <div>


            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={rec.picture} alt="Food" className='rounded w-screen' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{rec.name}</h2>
                    <p className='font-bold'>Ingredients:</p>
                    <p>{rec?.ingredients?.map((data, index) => <li key={index}>{data}</li>)}</p>
                    <p className='font-bold'>Cooking method:</p>
                    <p>{rec.method}</p>

                    <div className='flex gap-2 flex-row items-center my-4'>
                        <Rating
                            readonly
                            placeholderRating={rec.rating}
                            emptySymbol={<FaRegStar />}

                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        ></Rating>
                        <span>{rec.rating}</span>
                    </div>

                    <div className="card-actions">
                        <button disabled={disabled} onClick={handleOnClick} className="btn">Add to Favourite</button>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </div>
    );
};

export default SingleChefRecipes;