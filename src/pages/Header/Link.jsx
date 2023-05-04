import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({to, children}) => {
    return (
        <div className=''>
            <NavLink
            to={to}
            className={({isActive}) => isActive ? "bg-slate-600 py-1 px-2 rounded hover:bg-slate-700 " : " hover:text-white"}
        >
            {children}
        </NavLink>
        </div>
    );
};

export default Link;