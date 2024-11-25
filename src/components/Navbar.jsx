import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } =
    useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="../../src/images/main-logo.png" alt="Logo" className="h-14" />
        </div>
        <nav className="flex items-center space-x-6 font-bold">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Men</a>
          <a href="#" className="hover:text-blue-500">Women</a>
          <a href="#" className="hover:text-blue-500">Shop</a>
          <a href="#" className="hover:text-blue-500">Sale</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
          <div className="relative">
            <button
              onClick={() => setShowCart(!showCart)}
              className="hover:text-blue-500"
            >
              Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
            </button>
            {showCart && (
              <div className="absolute right-0 bg-white shadow-lg rounded p-4 w-96 z-10">
                <h3 className="text-lg font-bold mb-4">Your Cart</h3>
                {cart.length > 0 ? (
                  <ul>
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center mb-2"
                      >
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p>
                            ${item.price} x {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-200 px-2 rounded"
                          >
                            -
                          </button>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-gray-200 px-2 rounded"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-2 text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Your cart is empty</p>
                )}
                {cart.length > 0 && (
                  <>
                    <div className="flex justify-between items-center mt-4">
                      <strong>Total:</strong>
                      <strong>${getTotalPrice().toFixed(2)}</strong>
                    </div>
                    <button
                      onClick={() => {
                        alert("Checkout Complete!");
                        clearCart();
                        setShowCart(false);
                      }}
                      className="bg-black text-white px-4 py-2 rounded mt-4"
                    >
                      Checkout
                    </button>
                  </>
                )}
                <button
                  onClick={() => setShowCart(false)}
                  className="mt-4 bg-gray-200 px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
