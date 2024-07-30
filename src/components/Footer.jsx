import React from 'react';
import Logo from '../assets/Brand Logo1.png';
import { FaFacebook, FaInstagram, FaTwitter,FaTiktok, FaLinkedin } from 'react-icons/fa';
import Visa from '../assets/Visa.png';
import Master from '../assets/Master.png';
import Paypal from '../assets/Paypal.png';
import Pay from '../assets/Pay.png';
import Gpay from '../assets/Gpay.png';

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-wrap justify-between py-4 px-8 bg-black text-white font-poppins ">
        <div className="md:w-1/4 mb-8">
          <img src={Logo} alt="Logo" />
          <h2 className="mt-4 text-white">
            We have clothes that suit your style <br />
            and which you’re proud to wear.
          </h2>
          <h1 className="font-bold pt-6">Contact Us</h1>
          <ul className="pt-4">
            <li>hello@forpeople.stud</li>
            <li>+94 12345 6789</li>
            <li>123 Ave, New York, USA</li>
          </ul>
          <div className="flex items-center mt-4 space-x-4 pt-2">
            <a
              className="w-6 h-6 flex items-center justify-center rounded bg-white text-black"
              href="/"
            >
              <FaFacebook />
            </a>
            <a
              className="w-6 h-6 flex items-center justify-center rounded bg-white text-black"
              href="/"
            >
              <FaLinkedin />
            </a>
            <a
              className="w-6 h-6 flex items-center justify-center rounded bg-white text-black"
              href="/"
            >
              <FaTwitter />
            </a>
            <a
              className="w-6 h-6 flex items-center justify-center rounded bg-white text-black"
              href="/"
            >
              <FaInstagram />
            </a>
            <a
              className="w-6 h-6 flex items-center justify-center rounded bg-white text-black"
              href="/"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="md:w-1/4 mb-8">
          <h1 className="font-bold mb-4">Company info</h1>
          <ul>
            <li>About Us</li>
            <li>Collaboration</li>
            <li>Media</li>
            <li>Shop</li>
            <li>Advertising</li>
          </ul>
        </div>

        <div className="md:w-1/4 mb-8">
          <h1 className="font-bold mb-4">Need Help</h1>
          <ul>
            <li>Customer Support</li>
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>Shipping Info</li>
            <li>Order Status</li>
            <li>FAQ's</li>
          </ul>
        </div>

        <div className="md:w-1/4 mb-8">
          <h1 className="font-bold mb-4">More info</h1>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Returns & Refunds Policy</li>
          </ul>
        </div>
      </div>
      
      <div className=" flex  bg-black text-white  ">
        <div className="md:w-1/3 pl-8">
          <h6>Copyright © 2023 Euphoria Folks Pvt Ltd.All rights reserved.</h6>
        </div>
        <div className="md:w-1/3 pl-10">
          <div>Designed & Developed by Clevonex</div>
        </div>
        <div className="md:w-1/3 pr-44 flex justify-end space-x-1">
          <span><img src={Visa} alt="Visa" className="w-8 h-8" /></span>
          <span><img src={Master} alt="Master" className="w-8 h-8" /></span>
          <span><img src={Paypal} alt="Paypal" className="w-8 h-8" /></span>
          <span><img src={Pay} alt="Pay" className="w-8 h-8" /></span>
          <span><img src={Gpay} alt="Gpay" className="w-8 h-8" /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;