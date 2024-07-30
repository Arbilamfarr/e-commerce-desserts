import React from "react";
import Banner from "./Banner";
import ProductList from "../product/ProductList";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">New Products</h1>
        <ProductList />
      </main>
    </>
  );
};

export default Home;
