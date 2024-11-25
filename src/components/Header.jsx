import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaPinterest />
          </a>
        </div>
        <p>
          <strong>Special Offer:</strong> Free Shipping on all the orders above
          $100
        </p>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-blue-500">Contact</a>
          <a href="#" className="hover:text-blue-500">Cart</a>
          <a href="#" className="hover:text-blue-500">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
