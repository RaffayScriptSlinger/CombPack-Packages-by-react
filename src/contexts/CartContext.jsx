import React, { createContext, useContext, useState } from 'react';

// CartContext created to hold the cart data and functionalities
const CartContext = createContext();

// CartProvider component that wraps the application and provides cart functionalities
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                // If item exists, update its quantity
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            // If item doesn't exist, add it to the cart
            return [...prevItems, { ...item, quantity: item.quantity }];
        });
    };

    // Function to get the total amount of the cart
    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Providing cart items, addToCart, getTotalAmount, and clearCart functionalities
    return (
        <CartContext.Provider value={{ cartItems, addToCart, getTotalAmount, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Using useContext directly in components as per your preference
export const useCart = () => useContext(CartContext);
