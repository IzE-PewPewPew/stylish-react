import React from "react";
import Header from "./components/Header";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import LatestProduct from "./components/LatestProduct";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <Navbar />
        <HeroSection />
        <ProductList />
        <LatestProduct />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
