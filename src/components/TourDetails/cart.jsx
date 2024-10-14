import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext'; // Path ko apne project ke structure ke mutabiq adjust karein

// Cart component ka start
const Cart = () => {
    // cartItems (jo items cart me hain), getTotalAmount (total amount calculate karne ka function), clearCart (cart ko clear karne ka function) ko CartContext se le rahe hain
    const { cartItems, getTotalAmount, clearCart } = useCart(); 
    
    // showGrandTotal ek state hai jo yeh decide karega ke grand total dikhana hai ya nahi. Initial value false hai, yani default me hidden hoga.
    const [showGrandTotal, setShowGrandTotal] = useState(false); 

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            
            {/* Agar cart me koi item nahi hai, to yeh message dikhai dega ke "Your cart is empty." */}
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {/* Cart ke items ko list me dikhaya ja raha hai */}
                    <ul className="mb-4">
                        {cartItems.map((item) => (
                            // Har item ke liye ek list item create ho raha hai jisme item ka naam aur quantity dikhai jayegi
                            <li key={item.id} className="flex justify-between mb-2">
                                <span>{item.name} (x{item.quantity})</span>
                                {/* Item ka total price calculate karke dikhaya ja raha hai */}
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Total quantity dikhane ke liye */}
                    <div className="flex justify-between font-bold">
                        <span>Total Quantity:</span>
                        {/* Yahan par tum total quantity dikhana chahte ho, iske liye logic add karna hoga */}
                    </div>

                    {/* Agar showGrandTotal true hai, tabhi grand total dikhai jayega */}
                    {showGrandTotal && (
                        <div className="flex justify-between font-bold mt-2">
                            <span>Total Amount:</span>
                            {/* getTotalAmount se total amount calculate kar rahe hain */}
                            <span>${getTotalAmount()}</span> {/* Yeh ensure karo ke getTotalAmount formatted value return kare */}
                        </div>
                    )}

                    {/* Ek button jo grand total ko show ya hide karega */}
                    <button
                        // is function ke through showGrandTotal state ka value toggle kar rahe hain, yani agar false hai to true karenge aur agar true hai to false
                        onClick={() => setShowGrandTotal(!showGrandTotal)}
                        className="mt-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                    >
                        {/* Button ka text showGrandTotal ke state ke mutabiq change hoga */}
                        {showGrandTotal ? "Hide Grand Total" : "Show Grand Total"}
                    </button>

                    {/* Clear Cart ka button jo click karne par cart ko empty karega */}
                    <button
                        onClick={clearCart}
                        className="mt-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded ml-4"
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

// Component ko export kar rahe hain taake baaki jagah istimaal kiya ja sake
export default Cart;
