import React, { useEffect, useState } from 'react';

const Chef = () => {
    const [chefData, setChefData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    console.log(chefData);

    return (
        <div className='mx-auto container my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

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
                            <p>Rating: {allchef.likes}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Recipes</button>
                            </div>
                        </div>
                    </div>

                </div>
            ))}




        </div>
    );
};

export default Chef;