import React from 'react';
import { FaPagelines, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
    const recipe = useLoaderData();
    const {name, photo_url, year_of_experience, num_recipes, likes, bio, recipes} = recipe;
    return (
        <div className='py-28 px-8 bg-slate-600'>
            <div className='lg:flex justify-between items-center gap-8 bg-slate-900 p-12 border-8 border-double border-orange-400'>
                <div className='border-4 rotate-6 rounded'>
                    <LazyLoad offset={1000}>
                        <img className='border-4 -rotate-6' src={photo_url} alt="" />
                        </LazyLoad>
                
                </div>
                <div className='bg-white rounded-lg p-4 border-8 border-double border-orange-400'>
                    <h2 className='text-2xl font-bold text-orange-600 pb-4'>{name}</h2>
                    <p>{bio}</p>
                    <p className='flex items-center gap-1 pt-2 pb-5'><FaThumbsUp className='text-blue-500'/> {likes}</p>
                    <p>Number of Recipes: <span className='text-orange-600 font-semibold'>{num_recipes}</span></p>
                    <div>Year of Experience: <span className='text-orange-600 font-semibold'>{year_of_experience}</span></div>

                </div>
                
            </div>
            <div className='bg-white mt-8'>
            <div className='text-center py-12'><h2 className='text-3xl font-bold text-orange-600 flex justify-center pb-3'>Recipes <FaPagelines/></h2>
            <p className='text-gray-600 text-lg'>Here are some Special & Delicious recipes of Chef {name}</p></div>
                {
                    recipes.map(rd => <RecipeDetails
                        key={rd.id}
                        rd={rd}
                    ></RecipeDetails> )
                }
            </div>
        </div>
    );
};

export default Recipes;