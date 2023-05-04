import React from 'react';
import bg from '../../assets/images/bg.jpg'
const About = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0">
                <img src={bg} className="w-full h-full object-cover" alt="Background image" />
            </div>
            <div className="relative z-10 lg:flex flex-col justify-center pl-16 w-2/3 lg:w-1/2 h-screen">
                <h1 className="text-slate-600 text-2xl lg:text-4xl font-bold mb-4 pt-8">About Flavor Fusion</h1>
                <p className="text-slate-600 text-lg pb-3">We serve the best food in town</p>
                <p className="text-slate-600 lg:text-lg pb-3">We pride ourselves on using only the freshest and most flavorful ingredients in our dishes, sourcing local and sustainable produce whenever possible. Our chefs also have a passion for experimenting with new flavors and techniques, so you can expect to find new and exciting dishes on our menu that are sure to surprise and delight your senses.
                </p>
                <p className="text-slate-600 lg:text-lg mb-4">Come and experience the vibrant and eclectic flavors of Flavor Fusion today, and discover why our restaurant has become a favorite among foodies and adventurous eaters alike!</p>
            </div>
        </div>
    );
};

export default About;