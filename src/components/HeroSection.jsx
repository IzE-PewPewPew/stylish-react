import React from "react";

const HeroSection = () => {
  return (
    <section className="container mx-auto my-8 px-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="../../src/images/card-image1.jpg"
            alt="Shoe 1"
            className="rounded-md"
          />
          <h3 className="mt-2 text-center text-lg font-bold">Nike Blue</h3>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <img
            src="../../src/images/card-image2.jpg"
            alt="Shoe 2"
            className="rounded-md"
          />
          <h3 className="mt-2 text-center text-lg font-bold">Nike Red</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
