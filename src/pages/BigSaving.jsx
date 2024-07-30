import React from 'react';
import Arrow from '../assets/arrow.png';
import Arrow1 from '../assets/Arrow1.png';
import UserIcon from '../assets/UserIcon.png';
import FillterIcon from '../assets/FillterIcon.png';
import Icon2 from '../assets/Icon2.png';
function BigSavingZone() {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden py-10 px-14"> 
      <div className="flex justify-between items-center mb-6">
      <div className='flex items-center space-x-2'> 
      <img src={Icon2} alt=""/> 
      <h1 className="text-3xl font-bold">Big Saving Zone</h1> 
    </div>
        <div className="flex space-x-6">
          <div className="relative inline-block">
            <img src={UserIcon} alt="User Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
            <select className="border border-gray-300 rounded bg-gray-50 pl-8 pr-2 py-1 focus:outline-none focus:ring focus:ring-blue-500">
              <option value="all">Select Genders</option>
              <option value="men">Men</option> 
              <option value="women">Women</option>
            </select>
          </div>
          <div className="relative inline-block">
            <img src={FillterIcon} alt="Filter Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4" />
            <select className="border border-gray-300 rounded bg-gray-50 pl-8 pr-2 py-1 focus:outline-none focus:ring focus:ring-blue-500">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 mb-6 pt-6">
        <div className="relative bg-[url('../src/assets/Big1.jpg')] bg-cover bg-center  rounded-lg h-64 px-6 py-4 flex flex-col justify-end">
          <div className=" pb-16 pl-10 rounded-lg">
            <h4 className=" font-bold text-white">Low Price</h4>
            <h2 className="text-xl font-bold text-white pt-4">High Coziness</h2>
            <p className=" text-white">UPTO 50% OFF</p>
            <h4 className=" py-2 text-white underline underline-offset-4">Explore Items</h4>
          </div>
        </div>
        
        <div className="relative bg-[url('../src/assets/Big2.jpg')] bg-cover bg-center rounded-lg h-64 px-6 py-4 flex flex-col justify-end">
        <div className=" pb-16 pl-10 rounded-lg">
            <h4 className=" font-bold text-white">Beyoung Presents</h4>
            <h2 className="text-xl font-bold text-white pt-4">Breezy Summer Style</h2>
            <p className=" text-white">UPTO 50% OFF</p>
            <h4 className=" py-2 text-white underline underline-offset-4">Explore Items</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 mb-6">
        <div className="relative bg-[url('../src/assets/Big3.png')] bg-cover bg-center rounded-lg h-72 px-6 py-4 flex flex-col justify-end">
        <div className=" pb-10 pl-10 rounded-lg">
            <h2 className=" text-xl font-bold text-white">Hawaiian <br/> Shirts</h2>
            <h6 className="  text-white pt-4">Dress up in summer vibe</h6>
            <p className=" text-white">UPTO 50% OFF</p>
            <img src={Arrow} alt="" className=' pl-12'/>
            <button className=" py-2 mt-2 text-white rounded-md border-2 border-white w-32">SHOP NOW</button>
            
          </div>
        </div>
        
        <div className="relative bg-[url('../src/assets/Big4.png')] bg-cover bg-center rounded-lg h-72 px-6 py-4 flex flex-col justify-end">
        <div className=" pt-6 absolute inset-y-0 right-2 rounded-lg">
        <button className=" py-2 mt-2 text-white rounded-md border-2 border-white bg-black w-32">Limited Stock</button>
            <h2 className=" text-xl font-bold text-white">Printed<br/>T-Shirt</h2>
            <h6 className="  text-white pt-4">New Designs Every Week</h6>
            <p className=" text-white">UPTO 40% OFF</p>
            <img src={Arrow} alt="" className=' pl-12'/>
            <button className=" py-2 mt-2 text-white rounded-md border-2 border-white w-32">SHOP NOW</button>
          </div>
        </div>

        <div className="relative bg-[url('../src/assets/Big5.png')] bg-cover bg-center rounded-lg h-72 px-6 py-4 flex flex-col justify-end">
        <div className=" pt-8 absolute inset-y-0 right-2 rounded-lg">
        <h2 className=" text-2xl font-bold text-black">Cargo <br/> Joggers</h2>
            <h6 className="  text-black pt-4">Move with style & comfort</h6>
            <p className=" text-black">UPTO 50% OFF</p>
            <img src={Arrow1} alt="" className=' pl-12 '/>
            <button className=" py-2 mt-2 text-black rounded-md border-2 border-black w-32">SHOP NOW</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10">
        <div className="relative bg-[url('../src/assets/Big6.png')] bg-cover bg-center rounded-lg h-72 px-6 py-4 flex flex-col justify-end">
        <div className=" pt-8 absolute inset-y-0 right-12 rounded-lg">
        <h2 className=" text-2xl font-bold text-black">Urban<br/>Shirts</h2>
            <h6 className="  text-black pt-4">Live In Confort</h6>
            <p className=" text-black">FLAT 60% OFF</p>
            <img src={Arrow1} alt="" className=' pl-12 '/>
            <button className=" py-2 mt-2 text-black rounded-md border-2 border-black w-32">SHOP NOW</button>
          </div>
        </div>
        
        <div className="relative bg-[url('../src/assets/Big7.png')] bg-cover bg-center rounded-lg h-72 px-6 py-4 flex flex-col justify-end">
        <div className=" pt-8 absolute inset-y-0 right-12 rounded-lg">
        <h1 className=" text-2xl font-bold text-black">Oversized <br/>T-Shirts</h1>
            <h6 className="  text-black pt-4">Street Style Icon</h6>
            <p className=" text-black font-bold">FLAT 60% OFF</p>
            <img src={Arrow1} alt="" className=' pl-12 '/>
            <button className=" py-2 mt-2 text-black rounded-md border-2 border-black w-32">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigSavingZone;
