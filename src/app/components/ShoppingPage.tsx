'use client';

import React, { useEffect, useState } from 'react';
import Navabar from './Navabar';
import { useCart } from '../../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ShoppingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { cart, addToCart } = useCart(); // Use useCart hook to get cart and addToCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navabar />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Products</h1>
          
          {/* Cart Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            <p className="text-gray-700">
              Items in cart: <span className="font-semibold">{cart.length}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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
                <p className="text-gray-600 text-sm mb-2">
                  {product.description.length > 20
                    ? `${product.description.slice(0, 20)}...`
                    : product.description}
                </p>
                <p className="text-gray-800 font-bold">${product.price}</p>
                <button
                  onClick={() => addToCart(product)} // Add to cart via useCart
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingPage;
