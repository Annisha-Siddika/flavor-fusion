import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipeDetails = ({ rd }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('This recipe is now your favorite!');
      };
    const { recipe_name, pic, ingredients, cooking_method, rating } = rd;
    return (
        <div className='text-center border-t-4 border-orange-600 border-dashed pt-12'>
            
            <div className='w-3/4 mx-auto'><img src={pic} alt="" className='w-[300px] lg:w-[600px] lg:h-[300px] mx-auto rounded' /></div>

            <div className='py-4 px-8'>
                <h2 className='text-xl font-semibold text-slate-600'>Recipe Name: <span className='text-orange-600'>{recipe_name}</span></h2>
                <p><span className='font-bold'>Ingredients: </span>{ingredients}</p>
                <p className='my-4'><span className='font-bold'>Cooking Method: </span>{cooking_method}</p>
                <div className='flex justify-center items-center gap-12 pb-12'>
                    <p className='font-semibold text-slate-600'>Ratings: {rating}</p>
                    <button  disabled={isFavorite} onClick={handleFavoriteClick} className='flex items-center gap-2 bg-orange-600 text-white py-2 px-4 rounded-lg font-bold'>{isFavorite ? 'Favorite' : 'Add to Favorites'} <FaHeart></FaHeart></button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;