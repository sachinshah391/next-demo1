'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartItem {
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

interface CartContextValue {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: number) => void;
    // clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage on initial render
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            console.log('Loading cart from localStorage:', storedCart);
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        console.log('Cart updated, saving to localStorage:', cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add a product to the cart
    const addToCart = (product: CartItem) => {
        setCart((prev) => {
            const updatedCart = [...prev, product];
            console.log('Adding to cart:', updatedCart);
            return updatedCart;
        });
    };

    // Remove a product from the cart
    const removeFromCart = (id: number) => {
        setCart((prev) => {
            const updatedCart = prev.filter((item) => item.id !== id);
            console.log('Removing from cart:', updatedCart);
            return updatedCart;
        });
    };

    // // Clear all items from the cart
    // const clearCart = () => {
    //     console.log('Clearing cart');
    //     setCart([]);
    // };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
