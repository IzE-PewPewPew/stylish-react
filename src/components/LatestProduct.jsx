import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Dummy product data
const allProducts = [
  { id: 1, image: "../../src/images/card-item1.jpg", title: "Running shoes for men", price: "99" },
  { id: 2, image: "../../src/images/card-item2.jpg", title: "Running shoes for men", price: "99" },
  { id: 3, image: "../../src/images/card-item3.jpg", title: "Running shoes for men", price: "99" },
  { id: 4, image: "../../src/images/card-item4.jpg", title: "Running shoes for men", price: "99" },
  { id: 5, image: "../../src/images/card-item5.jpg", title: "Running shoes for men", price: "99" },
  { id: 6, image: "../../src/images/card-item6.jpg", title: "New arrivals", price: "89" },
  { id: 7, image: "../../src/images/card-item7.jpg", title: "Casual sneakers", price: "79" },
  { id: 8, image: "../../src/images/card-item8.jpg", title: "Comfortable trainers", price: "89" },
  { id: 9, image: "../../src/images/card-item9.jpg", title: "Stylish runners", price: "109" },
];

const LatestProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(5); // Initial number of products to display

  const loadMoreProducts = () => {
    // Increase the number of visible products
    setVisibleProducts((prevCount) => Math.min(prevCount + 5, allProducts.length));
  };

  return (
    <section className="container mx-auto my-16 px-6">
      {/* Featured Products Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest Products</h2>
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
          />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
