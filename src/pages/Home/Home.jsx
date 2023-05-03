import React, { useEffect, useState } from 'react';
import Banner from '../Header/Banner/Banner';
import ChefInfo from './ChefInfo';

const Home = () => {
    const [chefInfo, setChefInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefinfo')
        .then(res => res.json())
        .then(data => setChefInfo(data.chefs))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <Banner></Banner>
            <div className='bg-slate-800 '>
            <h2 className='text-center text-orange-300 text-3xl font-bold py-20 underline'>Our chefs</h2>
            <div className="carousel carousel-center max-w p-4 space-x-4 ">
               
                {
                    chefInfo.map(chef => <ChefInfo
                        key={chef.id}
                        chef={chef}
                    ></ChefInfo>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;