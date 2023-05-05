import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefInfo = ({ chef }) => {
    const {id, name, photo_url, year_of_experience, num_recipes, likes } = chef;
    return (
        <div className="carousel-item flex gap-8 border  p-4 mb-36 bg-slate-700 ml-20 shadow-xl">
            <LazyLoad offset={1000}>
                <img src={photo_url} className="rounded-box w-52 h-64"/>
                </LazyLoad>
            
            <div className='mr-8 text-white'>
            <h2 className='text-xl pt-8 pb-3 font-bold'>{name}</h2>
            <p className='pt-3'>Year of Experience: {year_of_experience}</p>
            <p className='pt-2'>Number of Recipes: {num_recipes}</p>
            <p className='flex items-center gap-1 pt-2 pb-5'><FaThumbsUp className='text-blue-500'/> {likes}</p>
            <Link to={`/recipes/${id}`} className='bg-orange-300 text-white py-1 px-4 rounded hover:bg-orange-400'>View Recipes</Link>
            </div>
        </div>
    );
};

export default ChefInfo;