
"use client"
import { useState } from "react";


interface CheckoutForm {
  name: string;
  address: string;
  paymentMethod: string;
}

const Checkout = () => {
  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    address: "",
    paymentMethod: "credit_card",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Order submitted:", form);
    setOrderPlaced(true);
    localStorage.removeItem("cart");
  };

  if (orderPlaced) {
    return (
      <div>
        <main className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
          <p>
            Your order has been placed successfully. We will send you a
            confirmation email shortly.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-gray-700 mb-2">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Place Order
          </button>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
