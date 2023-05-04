import React, { useState } from 'react';

const SingleChefRecipes = ({ rec }) => {
    const [disabled, setDisabled] = useState(false);
    // console.log(rec)

    const handleOnClick = () => {
        setDisabled(true);
    }
    return (
        <div>


            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={rec.picture} alt="Food" className='rounded w-screen' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{rec.name}</h2>
                    <p className='font-bold'>Ingredients:</p>
                    <p>{rec?.ingredients?.map(data => <li>{data}</li>)}</p>
                    <p className='font-bold'>Cooking method:</p>
                    <p>{rec.method}</p>
                    <p className='font-bold'>Rating : {rec.rating}</p>
                    <div className="card-actions">
                        <button disabled={disabled} onClick={handleOnClick} className="btn">Add to Favourite</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleChefRecipes;