import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext, useState } from "react";
import { useCart } from "../../contexts/CartContext"; // Import the Cart context

function Camping() {
  // Accessing the current theme from ThemeContext
  const { theme } = useContext(ThemeContext);
  // Accessing the addToCart function from CartContext
  const { addToCart } = useCart();

  // Define the camping tour item to be added to the cart
  const campingItem = {
    id: 1,
    name: 'Camping Tour',
    price: 99.99,
    description: 'A wonderful camping experience in nature',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  // State for the number of persons attending the camping tour
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  // Function to increase the number of persons
  const increasePersons = () => {
    setNumberOfPersons((prev) => prev + 1);
  };

  // Function to decrease the number of persons
  const decreasePersons = () => {
    setNumberOfPersons((prev) => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
  };

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      {/* Main container with dynamic theme-based background and text color */}
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Content section for camping information */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Camping <br className="hidden lg:inline-block" />
              Where Nature Meets Adventure
            </h1>
            <p className="mb-8 leading-relaxed">
              Escape the daily grind and reconnect with the wilderness. Enjoy scenic trails, stargazing, and campfire adventures.
            </p>

            {/* Number of persons selector */}
            <div className="flex items-center mb-4">
              <button className="border rounded px-2 py-1 mr-2" onClick={decreasePersons}>
                -
              </button>
              <span className="text-lg">{numberOfPersons}</span>
              <button className="border rounded px-2 py-1 ml-2" onClick={increasePersons}>
                +
              </button>
            </div>

            {/* Add to Cart and Home buttons */}
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() =>
                  addToCart({
                    ...campingItem,
                    quantity: numberOfPersons,
                  })
                }
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

          {/* Image section for the camping tour */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="Camping" src={campingItem.image} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Camping;
