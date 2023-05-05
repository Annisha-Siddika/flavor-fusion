import React, { useState } from 'react';
import meal1 from '../../../assets/images/meal1.jpg'
import meal2 from '../../../assets/images/meal2.jpg';
import meal3 from '../../../assets/images/meal3.jpg';
import meal4 from '../../../assets/images/meal4.jpg';
import meal5 from '../../../assets/images/meal5.jpg';
import meal6 from '../../../assets/images/meal6.jpg';
import meal7 from '../../../assets/images/meal7.jpg';
import meal8 from '../../../assets/images/meal8.jpg';
import meal9 from '../../../assets/images/meal9.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';

const FoodMenu = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('This recipe is now your favorite!');
      };
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-orange-500 py-16'>Flavor Fusion Menu</h2>
            <div className="grid lg:grid-cols-3 gap-8 px-16 pb-8">

                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal1} className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Meze </h3>
                        <p className="mt-2 text-sm text-gray-500">Meze is a type of appetizer or small dish that is typically served before a meal. It can include a variety of dishes such as stuffed grape leaves, hummus, olives, and cheese.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal2} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Pide</h3>
                        <p className="mt-2 text-sm text-gray-500">Pide is a type of Turkish flatbread that is traditionally topped with cheese, meat, vegetables, or eggs and then baked in a wood-fired oven.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal3} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Baklava</h3>
                        <p className="mt-2 text-sm text-gray-500">Baklava is a sweet pastry made with layers of phyllo dough and chopped nuts, held together with honey or syrup.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal4} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Kuru Fasulye</h3>
                        <p className="mt-2 text-sm text-gray-500"> Kuru Fasulye is a hearty stew made with white beans, vegetables, and meat (usually beef or lamb) that is simmered for hours until it becomes thick and flavorful.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal5} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">İskender Kebabı</h3>
                        <p className="mt-2 text-sm text-gray-500"> İskender Kebabı is a traditional Turkish dish made with thinly sliced lamb or beef, served on top of pita bread and smothered in a rich tomato sauce and melted butter.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal6} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Mantı</h3>
                        <p className="mt-2 text-sm text-gray-500">Mantı is a type of Turkish dumpling that is usually filled with ground meat and spices, and then boiled or steamed. It is typically served with yogurt and garlic butter.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal7} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Lahmacun</h3>
                        <p className="mt-2 text-sm text-gray-500"> Lahmacun is a thin, crispy flatbread that is usually topped with minced meat, vegetables, and spices. It is often served as a snack or appetizer.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal8} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Simit</h3>
                        <p className="mt-2 text-sm text-gray-500">Simit is a popular street food in Turkey that is similar to a bagel. It is made from a twisted rope of dough that is dipped in molasses and then rolled in sesame seeds before being baked to perfection.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <img src={meal9} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">Köfte </h3>
                        <p className="mt-2 text-sm text-gray-500">Köfte is a type of meatball made with ground beef or lamb and spices. It can be grilled, baked, or fried, and is often served with rice, salad, and bread.</p>
                        <div className="mt-4 flex justify-between">
                            <span className="text-gray-900 font-medium">$9.99</span>
                             <button><FaHeart></FaHeart> </button>
                    
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
};

export default FoodMenu;