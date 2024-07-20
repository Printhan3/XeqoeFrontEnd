import React from 'react';
import UserIcon from '../assets/UserIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons';
import FillterIcon from '../assets/FillterIcon.png';
import Rectangle29 from '../assets/Rectangle 29.png';
import Rectangle30 from '../assets/Rectangle 30.png';
import Rectangle31 from '../assets/Rectangle 31.png';
import Rectangle32 from '../assets/Rectangle 32.png';
import Icon2 from '../assets/Icon2.png';


const TopSelling = () => {
  const products = [
    {
      id: 1,
      name: 'Line Pattern Black Hoodie',
      image: Rectangle29, // Correct way to import image
      brand: "AS’s Brand",
      rating: 4.9,
      price: 123.00,
      salePrice: 199.99,
    },
    {
      id: 1,
      name: 'Black Shorts',
      image: Rectangle30, // Correct way to import image
      brand: "Helen’s Brand",
      rating: 4.9,
      price: 12.00,
      salePrice: 20.99,
    },
    {
      id: 1,
      name: 'Active T-Shirts',
      image: Rectangle31, // Correct way to import image
      brand: "Jhanvi's Brand",
      rating: 4.9,
      price: 123.00,
      salePrice: 199.99,
    },
    {
      id: 1,
      name: 'Knitted Joggers',
      image: Rectangle32, // Correct way to import image
      brand: "Jhanvi's Brand",
      rating: 4.9,
      price: 123.00,
      salePrice: 199.99,
    },

    // ... other products
  ];

  return (

    <div className="bg-white py-10 px-10">
      <div className='flex justify-between items-center'>
      <div className='flex items-center space-x-2'> 
      <img src={Icon2} alt=""/> 
      <h1 className="text-3xl font-bold">Top Selling</h1> 
    </div>
        <div className="flex space-x-6">
          <div className="relative inline-block">
            <img src={UserIcon} alt="User Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
            <select className="border border-gray-300 rounded bg-gray-100 pl-8 pr-2 py-1 focus:outline-none focus:ring focus:ring-blue-500">
              <option value="all">Select Genders</option>
              <option value="men">Men</option> 
              <option value="women">Women</option>
            </select>
          </div>
          <div className="relative inline-block">
            <img src={FillterIcon} alt="Filter Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
            <select className="border border-gray-300 rounded bg-gray-100 pl-8 pr-2 py-1 focus:outline-none focus:ring focus:ring-blue-500">
              <option value="all">Categories</option>
              <option value="Knitted Joggers">Knitted Joggers</option>
              <option value="Full Sleeve">Full Sleeve</option>
              <option value="Active T-Shirts">Active T-Shirts</option>
              <option value="Urban Shirts">Urban Shirts</option>
            </select>
          </div>
          <h1 className="hover:underline pt-1">View All →</h1> 
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10 px-20"> {/* Adjust grid layout as needed */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { name, image, brand, rating, price, salePrice } = product;

  return (
    <div className="flex flex-col rounded-lg shadow-md bg-white overflow-hidden">
      <img className="w-full h-88 object-cover" src={image} alt={name}/>
       <div className="flex flex-col p-4 bg-gray-100">
    
        <h5 className="text-gray-800 font-medium mb-2">{name}</h5>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon icon={faStar} className="text-blue-600 mr-1" />
          <span className="text-blue-600 mr-3">
            {rating}
          </span>
          <p className="text-gray-700 text-base ">{brand}</p> 
        </div>
          <div className="flex items-center text-sm"> 
          <p className="text-gray-800 mr-2">${price.toFixed(2)}</p>
          {salePrice && (
            <span className="text-red-500 line-through">
              ${salePrice.toFixed(2)}
            </span>
          )}
          {/* --add card---*/}
         <span className='pl-16'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-10 h-10">
        +</button> </span>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;