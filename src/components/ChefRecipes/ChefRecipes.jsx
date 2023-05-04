import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleChefRecipes from '../SingleChefRecipes/SingleChefRecipes';

const ChefRecipes = () => {
    const [chef, setChef] = useState("");
    const { id } = useParams();
    // console.log('Id: ', id);

    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => setChef(data.chef))
    }, []);

    // console.log(chef);
    return (
        <div className='mx-auto container my-10'>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full h-full">
                    <img className="w-full h-full object-cover rounded-xl" src={chef.picture} alt="Image" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className="font-bold text-5xl">Name: {chef?.name}</h1>
                    <p className="font-bold text-xl">About: {chef?.bio}</p>
                    <p className="font-bold text-xl">Rating: {chef?.likes}</p>
                    <p className="font-bold text-xl">Num of Recipes: {chef?.numRecipes}</p>
                    <p className="font-bold text-xl">Experience: {chef?.experience} years</p>
                </div>
            </div>

            <div className='text-center my-10 text-5xl font-bold underline'><h1>My Recipes </h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">



                {chef?.recipes?.map((rec, index) => <SingleChefRecipes rec={rec} key={index}></SingleChefRecipes>)}

            </div>





        </div>
    );
};

export default ChefRecipes;