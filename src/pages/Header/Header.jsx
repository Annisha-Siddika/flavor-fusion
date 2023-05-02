import React from 'react';
import logo from '/fusion-logos_transparent.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="navbar py-0 px-8 h-3 bg-transparent absolute">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <Link to='/'>Home</Link>
        <Link to='/'>Blog</Link>
        <Link>Chef's Recipe</Link>
      </ul>
    </div>
    <img className='w-36 h-36' src={logo}  />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-orange-300 font-semibold">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <a>
          Blogs
          
        </a>
      </li>
      <li><a>Chef's Recipe</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn bg-orange-300 text-white font-bold" to='/login'>Login</Link>
  </div>
</div>
    );
};

export default Header;