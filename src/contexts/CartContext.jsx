// import React, { createContext, useContext, useState } from 'react';

// // CartContext created to hold the cart data and functionalities
// const CartContext = createContext();

// // CartProvider component that wraps the application and provides cart functionalities
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     // Function to add items to the cart
//     const addToCart = (item) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find((i) => i.id === item.id);
//             if (existingItem) {
//                 // Update the quantity if the item already exists
//                 return prevItems.map((i) =>
//                     i.id === item.id
//                         ? { ...i, quantity: i.quantity + item.quantity }
//                         : i
//                 );
//             }
//             // Add new item to the cart if it doesn't exist
//             return [...prevItems, { ...item, quantity: item.quantity }];
//         });
//     };

  

//     // Function to clear the cart
//     const clearCart = () => {
//         setCartItems([]);
//     };

//     // Providing cart items, addToCart, getTotalAmount, and clearCart functionalities
//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// // Custom hook to use CartContext in components
// export const useCart = () => useContext(CartContext);
