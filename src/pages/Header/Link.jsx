import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({to, children}) => {
    return (
        <div className=''>
            <NavLink
            to={to}
            className={({isActive}) => isActive ? "text-orange-700 hover:text-orange-300" : " hover:text-orange-300"}
        >
            {children}
        </NavLink>
        </div>
    );
};

export default Link;