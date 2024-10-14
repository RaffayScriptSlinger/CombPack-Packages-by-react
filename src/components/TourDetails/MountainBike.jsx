import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext"; // Importing ThemeContext
import { useCart } from "../../contexts/CartContext"; // Importing CartContext

function MountainBike() {
    // Accessing theme from ThemeContext
    const { theme } = useContext(ThemeContext);
    // Accessing addToCart function from CartContext
    const { addToCart } = useCart(); 

    // Mountain bike adventure item definition
    const mountainBikeItem = {
        id: 4,
        name: 'Mountain Bike Adventure', // Name of the item
        price: 59.99, // Price of the item
        description: 'Experience the thrill of mountain biking', // Item description
        image: 'https://plus.unsplash.com/premium_photo-1663013212103-d68586132dfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Image URL
    };

    const [numberOfPersons, setNumberOfPersons] = useState(1); // State to keep track of number of persons

    // Function to increase the number of persons
    const increasePersons = () => {
        setNumberOfPersons(prev => prev + 1);
    };

    // Function to decrease the number of persons
    const decreasePersons = () => {
        setNumberOfPersons(prev => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
    };

    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
            {/* Wrapper div with dynamic theme classes */}
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    {/* Content area with item description */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                            Mountain Bike
                            <br className="hidden lg:inline-block" />
                            Ride the Wild
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Ride through rugged trails and conquer steep climbs with the thrill of mountain biking. Whether you're navigating technical descents or enjoying the scenic views, mountain biking is the perfect blend of adventure and nature.
                        </p>
                        
                        {/* Buttons to increase or decrease the number of persons */}
                        <div className="flex items-center mb-4">
                            <button
                                className="border rounded px-2 py-1 mr-2"
                                onClick={decreasePersons}
                            >
                                -
                            </button>
                            <span className="text-lg">{numberOfPersons}</span>
                            <button
                                className="border rounded px-2 py-1 ml-2"
                                onClick={increasePersons}
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart and Home buttons */}
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                onClick={() => addToCart({ ...mountainBikeItem, quantity: numberOfPersons })}
                            >
                                Add to Cart
                            </button>
                            <Link to={"/Content"}>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                    Home
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Displaying mountain bike adventure image */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="Mountain Bike Adventure"
                            src={mountainBikeItem.image}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MountainBike;
