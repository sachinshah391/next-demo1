'use client';

import React from 'react';
import { useCart } from '../../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-800 font-bold">${product.price}</p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
