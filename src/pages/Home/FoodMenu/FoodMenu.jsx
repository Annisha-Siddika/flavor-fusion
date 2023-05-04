import React from 'react';
import meal1 from '../../../assets/images/meal1.jpg'
import meal2 from '../../../assets/images/meal2.jpg';
import meal3 from '../../../assets/images/meal3.jpg';
import meal4 from '../../../assets/images/meal4.jpg';
import meal5 from '../../../assets/images/meal5.jpg';
import meal6 from '../../../assets/images/meal6.jpg';
import meal7 from '../../../assets/images/meal7.jpg';
import meal8 from '../../../assets/images/meal8.jpg';
import meal9 from '../../../assets/images/meal9.jpg';

const FoodMenu = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-orange-500 py-16'>Flavor Fusion Menu</h2>
            <div className="grid grid-cols-3 gap-4">
            
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal1} className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal2} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal3} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal4} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal5} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal6} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal7} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal8} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
                <img src={meal9} alt="Menu Item" className="h-48 w-full object-cover rounded-t-lg" />
                <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">Menu Item 1</h3>
                    <p className="mt-2 text-sm text-gray-500">Description of Menu Item 1</p>
                    <div className="mt-4 flex justify-between">
                        <span className="text-gray-900 font-medium">$9.99</span>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-900">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>


        </div>
        </div>

    );
};

export default FoodMenu;