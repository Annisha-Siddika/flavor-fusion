import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {
    const recipe = useLoaderData();
    const {name, photo_url, year_of_experience, num_recipes, likes, bio, recipes} = recipe;
    return (
        <div className='py-28 px-8 bg-slate-600'>
            <div className='lg:flex justify-between items-center gap-8 bg-slate-900 p-12 border-8 border-double border-orange-400'>
                <div className='border-4 rotate-6 rounded'>
                <img className='border-4 -rotate-6' src={photo_url} alt="" />
                </div>
                <div className='bg-white rounded-lg p-4 border-8 border-double border-orange-400'>
                    <h2 className='text-2xl font-bold text-orange-600 pb-4'>{name}</h2>
                    <p>{bio}</p>
                    <p className='flex items-center gap-1 pt-2 pb-5'><FaThumbsUp className='text-blue-500'/> {likes}</p>
                    <p>Number of Recipes: <span className='text-orange-600 font-semibold'>{num_recipes}</span></p>
                    <p>Year of Experience: <span className='text-orange-600 font-semibold'>{year_of_experience}</span></p>

                </div>
                
            </div>

        </div>
    );
};

export default Recipes;