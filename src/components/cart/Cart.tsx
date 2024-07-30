"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const handleRemoveItem = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleCheckout = () => {
    window.location.href = "/checkout";
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-6">
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
