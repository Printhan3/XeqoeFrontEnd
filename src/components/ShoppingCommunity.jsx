import React, {useState} from 'react';
import Icon3 from '../assets/Icon3.png';
import Send from '../assets/Send.png';

const ShoppingCommunity = () => {
    
        const [email, setEmail] = useState('');
      
        const handleSubmit = (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Email submitted:', email);
            setEmail(''); // Clear the email input field
        };


  return (
    <div className="flex flex-col items-center justify-center  bg-white px-5 py-12">
      <img src={Icon3} alt="Icon" className="mb-4" />
      <div className="text-center">
        <h1 className="text-3xl title-font font-bold text-black pb-6">
          JOIN SHOPPING COMMUNITY TO GET <br />
          MONTHLY PROMO
        </h1>
        <h2 className='text-2xl text-gray-500 pb-12'>Type your email down below and be young wild generation</h2>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            placeholder="Add your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="bg-black text-white rounded px-6 py-2 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img src={Send} alt="Send Icon" className="h-5 w-5" /> 
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShoppingCommunity;

