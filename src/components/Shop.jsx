import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faComment,faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import bannerImage from '../assets/banner.png';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';
import { RiShoppingCartFill } from 'react-icons/ri';
import Brand1 from '../assets/Brand1.png';
import Brand2 from '../assets/Brand2.png';
import Brand3 from '../assets/Brand3.png';
import Brand4 from '../assets/Brand4.png';
import Dress1 from '../assets/Dress1.png';
import Dress2 from '../assets/Dress2.png';



const Shop = () => {
  return (
    <div name='shop' className='size-full'> 
      <div className='mx-auto h-full px-4 py-10 flex flex-col justify-center bg-gray-100'> 
        <HomePage />
      </div>
    </div>
  );
}

function Header() {
  return (   
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col md:flex-row space-x-4">
      {/* main Part*/}
      <div className=" bg-white shadow-sm rounded-lg p-6 mb-6 bg-cover md:w-3/4">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="text-center md:text-left md:w-3/4 pl-10">
          <h1 className="text-5xl font-bold pb-6">LET'S EXPLORE <br/> <span className="relative inline-block pb-4 ">
              <span className="relative z-10 pb-4">UNIQUE</span>
              <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform skew-x-6 -rotate-2 z-0">
                </span>
            </span> CLOTHES.</h1>
          <p className="pb-6 text-xl">Live for Influential and Innovative fashion!</p>
          <button className="bg-black text-white py-2 px-4 rounded inline-flex items-center">
                     Shop Now <span className="ml-2"><RiShoppingCartFill /></span>
                </button>
        </div>
        <div className="md:w-1/3 pb-6">
          <img src={bannerImage} alt="Banner" className="w-full rounded-lg h-60 bg-cover"/>
        </div>
      </div> 
      </div>
        {/* Promotional Card */}  
        <div className="md:w-1/4 ">
          <div className="bg-blue-400 shadow-sm rounded-lg bg-cover p-4">
          <p className="text-blue-800 text-lg font-Poppins">Summer sweatshirt from top brands</p>
          <div className='flex items-center px-24 '>
            <img src={Image4} alt="" className="w-20 h-20 rounded-lg mt-2 space-x-0 " />
            <img src={Image5} alt="" className="w-30 h-30 rounded-lg mb-2 pb-4" />
            </div>
            <h1 className=" text-blue-800 hover:underline pt-1">Buy it now →</h1> 
            
        </div>
        </div>
        </div>
      </div>
      
     
  );
}

const HomePage = () => {
  const products = [
    { id: 1, image:Image1, title: 'Cotton Long-Sleeve Turtleneck', price: 120, rating: 4.9 },
    { id: 2, image:Image2, title: 'The Cloud Relaxed Cardigan', price: 250, rating: 4.8 },
    { id: 2, image:Image1, title: 'Cotton Long-Sleeve Turtleneck', price: 250, rating: 4.8 },
    { id: 2, image:Image3, title: 'The Cloud Relaxed Cardigan', price: 250, rating: 4.8 },
    { id: 2, image:Image1, title: 'Cotton Long-Sleeve Turtleneck', price: 250, rating: 4.8 },
    
    // Add more products as needed
  ];

  const dailyDeals = [
    { id: 1, image:Image1, title: 'The Nautical Oversized Jacket', price: 320 },
    { id: 2, image:Image2, title: 'Cotton Long-Sleeve Turtleneck', price: 199 },
    { id: 3, image:Image1,  title: 'The Cloud Relaxed Cardigan', price: 240 },
    { id: 4, image:Image2, title: 'Cotton T-Shirt', price: 150 },
    { id: 5, image:Image1, title: 'Long-Sleeve Cotton Shirt', price: 180 },
    // Add more deals as needed 
  

  ];

  const popularCategories = [
    { id: 1, title: 'Popular top 10 brands', reviews: '5400+ Orders & reviews' },
    { id: 2, title: 'Popular top 10 brands', reviews: '5400+ Orders & reviews' },
    { id: 3, title: 'Popular top 10 brands', reviews: '5400+ Orders & reviews' },
    // Add more categories as needed
  ]; 

  const topbrands = [
    { id: 1, image:Dress1, title: 'The ReWool Oversized Shirt Jacket', description:'Meet your new chilly weather staple. The ReWool oversized shirt jacket has all the classic shirt detailling collar cuffs with buttons', 
      price: 167.00,
      salePrice: 199.99,  },
    { id: 2, image:Dress2, title: 'The Cloud Relaxed Cardigan', description:'Meet your new chilly weather staple. The ReWool oversized shirt jacket has all the classic shirt detailling collar cuffs with buttons', 
      price: 167.00,
      salePrice: 199.99,  },
  
  ];   

  
 return (
    <div className="container mx-auto p-6">
      <Header />

      <div className='w-full md:w-3/4 '>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
        </div>  

        {/* Daily Deals Section */}
        <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Daily Deals</h2>
        <div className="grid grid-cols-1 ">
          {dailyDeals.map(deal => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div> 
      </div>
      </div>  
       
       

      <div className="mt-8">
        <div  className="flex items-center space-x-6 ">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Explore Popular Categories</h2>
        <h5 className='text-sm mb-3'>see all →</h5> </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularCategories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Sweatshirt From top brands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topbrands.map(brand => (
            <BrandCard key={brand.id} {...brand} />
          ))}
        </div> 
      </div>

    </div>
  );
};

const ProductCard = ({ image, title, price, rating }) => {
  
   return ( 
    <div className="bg-white shadow-md rounded-lg p-4 ">
      <img src={image} alt={title} className="w-full h-40 object-contain rounded-lg "/>
      <h5 className="text-sm truncate">{title}</h5>
      <p className="text-gray-600 text-sm pl-2">Price ${price}</p>
      <div className="flex items-center pl-2 text-sm">
      <FontAwesomeIcon icon={faStar} className="text-blue-600 mr-1" />
          <span className="text-blue-600 mr-3">
            {rating}
          </span>
          <span className='pl-6'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full w-8 h-8">
        +</button> </span>
        </div>
      </div>
    
  );
};

const CategoryCard = ({ title, reviews }) => {
  return (
    <div className="bg-white shadow-md  rounded-lg p-4">
    <div className="flex items-center">
      {/* Container for overlapping brandimages */}
      <div className=" flex items-center ">
      <div className='z-30'><img src={Brand1} alt="" /></div>
      <div className="z-20 "><img src={Brand2} alt="" /></div>
      <div className='z-10 '><img src={Brand3} alt="" /></div>
      <div className='z-0 '><img src={Brand4} alt="" /></div>
      </div>
      
      <div className="border-l border-gray-600 pl-4 ml-4 flex-shrink-0">
        <h2 className="text-sm text-black">{title}</h2> <br/>
        <p className=" text-sm text-black">{reviews}</p>
      </div>
    </div>
  </div>
  
  );
}; 



const BrandCard = ({ image, title, description, price, salePrice }) => {

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [quantity, setQuantity] = useState(1);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = ['blue', 'brown', 'black', 'red'];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className='flex ierms-center'>
       <img src={image} alt=""/>
       <div> 
       <h2 className="text-sm  font-bold">{title}</h2> 
       <div className='flex items-center mt-2'>
      <span className='flex'>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
      <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" /></span>
      <span className='flex items-center ml-4'><FontAwesomeIcon icon={faComment} className=" mr-1" />
      <h5 className='text-sm'>200+ Reviews</h5></span>
      </div>
      <p className='font-medium text-[12px] leading-[18px] mt-2 '>{description}</p>
      <div className='flex items-center text-sm mt-2'>
      <p className="text-blue-800 mr-2">Price${price.toFixed(2)}</p>
          {salePrice && (
            <span className="text-red-500 line-through">
              ${salePrice.toFixed(2)}
            </span>
          )}
          </div> 

          <div className="mt-2">
        {sizes.map(size => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)} 
            className={`text-sm px-4 py-2 m-1 border rounded-md ${selectedSize === size ? 'bg-gray-700 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
        >{size}
          </button>
        ))}
      </div>
      <div className=" flex items-center mt-1 space-x-4">  
        <span className='mr-4'>Color</span>
       {colors.map(color => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}       
            className={`w-4 h-4 m-1 rounded-full ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
            style={{ backgroundColor: color }}
          />
        ))}
       
      <div className="mt-2 flex items-center justify-center px-2 py-2 border rounded-full bg-gray-100">
      <button
    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
    className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black"
  >
    -
  </button>
  <span className="w-6 h-6 flex items-center justify-center bg-gray-100 text-black">
    {quantity}
  </span>
  <button
    onClick={() => setQuantity(quantity + 1)}
    className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-black"
  >
    +
  </button>
      </div> </div> 

      <div className="flex space-x-4 mt-2">
        <button className="flex items-center px-4 py-2 border-2 rounded-lg text-blue-500 border-blue-500">
          <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
        </button>
        <button className="flex items-center px-4 py-2 border-2 rounded-lg text-blue-500 border-blue-500">
          Add to Card
        </button>
        <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg">
          Buy now
          <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
        </button>
      </div>


      </div>
      </div>
    </div>
  );
};

const DealCard = ({ image, title, price }) => {
  return (
      <div className=" flex items-center bg-white p-4 w-full md:w-1/5 space-x-4">
      <img src={image} alt="" className='w-12 h-12 rounded-full object-cover'/>
      <div className=''>
      <h2 className=" text-sm font-medium text-[12px] leading-[18px]">{title}</h2>
      <p className="text-gray-600 text-sm">Price: ${price}</p>
    </div>
    </div>
  );
};



export default Shop;
