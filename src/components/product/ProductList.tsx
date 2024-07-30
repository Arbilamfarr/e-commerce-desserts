import React from "react";
import ProductItem from "./ProductItem";


const products = new Array(20).fill(null); 

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-6 mx-auto">
      {products.map((_, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
};

export default ProductList;
