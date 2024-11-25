import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Dummy product data
const allProducts = [
  { id: 1, image: "../../src/images/card-item1.jpg", title: "Running shoes for men", price: "99", category: "Men" },
  { id: 2, image: "../../src/images/card-item2.jpg", title: "Running shoes for women", price: "99", category: "Women" },
  { id: 3, image: "../../src/images/card-item3.jpg", title: "Running shoes for men", price: "99", category: "Men" },
  { id: 4, image: "../../src/images/card-item4.jpg", title: "Running shoes for women", price: "99", category: "Women" },
  { id: 5, image: "../../src/images/card-item5.jpg", title: "Running shoes for men", price: "99", category: "Men" },
  { id: 6, image: "../../src/images/card-item6.jpg", title: "New arrivals for men", price: "89", category: "Men" },
  { id: 7, image: "../../src/images/card-item7.jpg", title: "Casual sneakers for women", price: "79", category: "Women" },
  { id: 8, image: "../../src/images/card-item8.jpg", title: "Comfortable trainers for men", price: "89", category: "Men" },
  { id: 9, image: "../../src/images/card-item9.jpg", title: "Stylish runners for women", price: "109", category: "Women" },
];

const FeaturedProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(5); // Initial number of products to display
  const [cart, setCart] = useState([]); // Cart state

  const loadMoreProducts = () => {
    // Increase the number of visible products
    setVisibleProducts((prevCount) => Math.min(prevCount + 5, allProducts.length));
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const purchase = () => {
    alert(`You purchased ${cart.length} items.`);
    setCart([]); // Clear the cart after purchase
  };

  return (
    <section className="container mx-auto my-16 px-6">
      {/* Featured Products Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        {visibleProducts < allProducts.length && (
          <button
            onClick={loadMoreProducts}
            className="text-gray-600 hover:text-black font-medium"
          >
            VIEW ALL
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>

      {/* Cart and Purchase Section */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold">Cart: {cart.length} items</h3>
        {cart.length > 0 && (
          <button
            onClick={purchase}
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Purchase
          </button>
        )}
      </div>

      {/* Two Image Display */}
      <div className="flex gap-4 mt-16">
        <img
          src="../../src/images/card-image1.jpg"
          alt="Shoe 1"
          className="rounded-lg w-1/2 object-cover"
        />
        <img
          src="../../src/images/card-image2.jpg"
          alt="Shoe 2"
          className="rounded-lg w-1/2 object-cover"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
