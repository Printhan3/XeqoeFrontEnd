import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiSearchLine, RiShoppingCartFill, RiUserFill, RiHeartFill } from 'react-icons/ri';
import Logo from '../assets/Brand Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-6 text-gray-900 bg-white shadow-md'>
      <div className='pl-4'>
        <img src={Logo} alt="Logo" className="h-8"/>
      </div>
      <div className='font-poppins hidden md:flex'>
        {/* Menu */}
        <ul className='hidden md:flex space-x-6'>
          <li className='uppercase text-sm'>
            <a href=''  className='hover:text-blue-500 hover:scale-125 transition-transform duration-200'>SHOP</a>
          </li>
          <li className='uppercase text-sm'>
            <a href=''  className='hover:text-blue-500  hover:scale-125 transition-transform duration-200'>MEN</a>
          </li>
          <li className='uppercase text-sm'>
            <a href=''  className='hover:text-blue-500  hover:scale-125 transition-transform duration-200'>WOMEN</a>
          </li>
          <li className='uppercase text-sm'>
            <a href=''  className='hover:text-blue-500  hover:scale-125 transition-transform duration-200'>KIDS</a>
          </li>
          <li className='uppercase text-sm'>
            <a href=''  className='hover:text-blue-500 hover:scale-125 transition-transform duration-200'>CONTACT US</a>
          </li>
        </ul>
      </div>

      <div className='w-80 flex items-center pl-2 bg-white'>
        <RiSearchLine className='text-gray-900' />
        <input
          type="search"
          name='search'
          id=''
          placeholder='Search For Product'
          className='w-full py-1 px-4 bg-white outline-none'
        />
      </div>
      
      {/* Hamburger */}
      <div onClick={handleClick} className='z-10 cursor-pointer md:hidden ml-4'>
        {!nav ? <FaBars className='text-gray-900' /> : <FaTimes className='text-gray-900' />}
      </div>
      
      <div className="hidden md:flex justify-center space-x-4">
        <a href=''><RiHeartFill className="text-black hover:text-blue-500 w-6 h-6 hover:scale-125 transition-transform duration-200" /></a>
        <a href=''><RiShoppingCartFill className="text-black hover:text-blue-500 w-6 h-6 hover:scale-125 transition-transform duration-200" /></a>
        <a href=''><RiUserFill className="text-black hover:text-blue-500 w-6 h-6 hover:scale-125 transition-transform duration-200" /></a>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center md:hidden ${nav ? 'flex' : 'hidden'}`}>
        <ul className='space-y-6'>
          <li className='uppercase text-lg'>
            <a href=''>SHOP</a>
          </li>
          <li className='uppercase text-lg'>
            <a href=''>MEN</a>
          </li>
          <li className='uppercase text-lg'>
            <a href=''>WOMEN</a>
          </li>
          <li className='uppercase text-lg'>
            <a href=''>KIDS</a>
          </li>
          <li className='uppercase text-lg'>
            <a href=''>CONTACT US</a>
          </li>
          <li className='flex justify-center space-x-4'>
            <a href=''><RiHeartFill className="text-black hover:text-blue-500 w-8 h-8 hover:scale-125 transition-transform duration-200" /></a>
            <a href=''><RiShoppingCartFill className="text-black hover:text-blue-500 w-8 h-8 hover:scale-125 transition-transform duration-200" /></a>
            <a href=''><RiUserFill className="text-black hover:text-blue-500 w-8 h-8 hover:scale-125 transition-transform duration-200" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

 