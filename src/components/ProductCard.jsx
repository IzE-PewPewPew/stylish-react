import React, { useContext } from "react";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { CartContext } from "./CartContext";

const ProductCard = ({ id, image, title, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="relative group bg-white shadow rounded p-4 overflow-hidden">
      <img src={image} alt={title} className="rounded w-full h-64 object-cover" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold text-gray-800">${price}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white p-3 rounded-full mx-2 shadow hover:bg-gray-200"
          onClick={() => addToCart({ id, image, title, price })}
        >
          <FaShoppingBag className="text-xl text-black" />
        </button>
        <button className="bg-white p-3 rounded-full mx-2 shadow hover:bg-gray-200">
          <FaSearch className="text-xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
