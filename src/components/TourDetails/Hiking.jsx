// Hiking.js
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
// import { useCart } from "../../contexts/CartContext";

function Hiking() {
    const { theme } = useContext(ThemeContext);
    // const { addToCart } = useCart();
    // const hikingItem = {
    //     id: 5,
    //     name: 'Hiking Adventure',
    //     price: 49.99,
    //     description: 'Experience nature on foot',
    //     image: 'https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // };

    // const [numberOfPersons, setNumberOfPersons] = useState(1);

    // const increasePersons = () => {
    //     setNumberOfPersons((prev) => prev + 1);
    // };

    // const decreasePersons = () => {
    //     setNumberOfPersons((prev) => (prev > 1 ? prev - 1 : 1));
    // };

    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
            <section className="body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                            Hiking
                            <br className="hidden lg:inline-block" />
                            Where Every Step Tells a Story
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Cast your line into tranquil waters, the thrill of the catch waiting beneath the surface. Whether you're fishing by the riverbank or on a peaceful lake, the serenity of nature surrounds you. Reel in the day's adventure with fresh air, quiet moments, and the excitement of that first bite.
                        </p>
                        <div className="flex justify-center">
                            <Link to={"/Form"}>
                            <button
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                
                            >
                                Book Now
                            </button>
                            </Link>
                           
                            <Link to={"/faqs"}>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                FAQs
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hiking;
