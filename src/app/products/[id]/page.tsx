import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetail = () => {
 
 const product:Product = {
   id: "1",
   name: "Product 1",
   price: 10.99,
   image: "/images/products/apple-watch.png",
   description: "This is a product description.",
 };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:ml-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
