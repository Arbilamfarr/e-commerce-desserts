import ProductList from "@/components/product/ProductList";
import React from "react";

const ProductIndex = () => {
  return (
    <>
      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <ProductList />
      </main>
    </>
  );
};

export default ProductIndex;
