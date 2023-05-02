import React from 'react';
import banner from '/banner.jpg';
import logo from '/public/fusion-logos_transparent.png'
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div
            className="bg-center bg-cover bg-no-repeat h-[80vh] text-center"
            style={{backgroundImage: `linear-gradient(175deg, 
                rgba(136, 136, 139, 0.5), black), url(${banner})`
            }}
        >
         <img className='w-64 mx-auto pt-14' src={logo} alt="" />
           
            <TypeAnimation
                sequence={[
                    "Savor the flavor of our culinary creations.",
                    1000,
                    "Where every bite is a tantalizing journey."
,
                    1000,
                    "Discover the art of taste in every dish."
,
                    1000,
                    "Where passion and flavor meet.",
                    1000,
                ]}
                speed={50}
                deletionSpeed={120}
                style={{ fontSize: '2em', color: 'burlywood' }}
                repeat={Infinity}
            />
        </div>

    );
};

export default Banner;