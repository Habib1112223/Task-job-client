import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/scc logo.jpg'

const Navbar = () => {
      const navLinks = <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">DashBoard</Link></li>



      </>
      return (
            <div className="navbar bg-gray-200 px-24">
                  <div className="navbar-start  mx-auto">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-sm bg-amber-400 rounded-box w-52">
                                    {navLinks}
                              </ul>
                        </div>
                        <Link to="/" className="text-2xl flex flex-cols items-center justify-center">
                              <img src={img} alt="SCC_logo" className='w-[150px] h-[100px]' />
                              <h2 className="font-bold">MANAGEMENT</h2>
                        </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium text-xl">
                              {navLinks}
                        </ul>
                  </div>
                  <div className="navbar-end">
                        <Link to="/login" className=" bg-amber-600 px-8 py-2 hover:bg-amber-600">Login</Link>
                  </div>
            </div>
      );
};

export default Navbar;