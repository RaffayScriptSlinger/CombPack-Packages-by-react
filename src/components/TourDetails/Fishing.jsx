import { Link } from "react-router-dom"; // Link component ko import kar rahe hain taake navigation ke liye use ho sake
import { useContext, useState } from "react"; // useContext aur useState hooks ko import kar rahe hain
import { ThemeContext } from "../../contexts/ThemeContext"; // ThemeContext ko import kar rahe hain taake theme handle kar sakein
import { useCart } from "../../contexts/CartContext"; // Cart context ko import kar rahe hain taake cart functionality mile

function Fishing() {
  const { theme } = useContext(ThemeContext); // Theme context ka theme access kar rahe hain (light ya dark mode)
  const { addToCart } = useCart(); // Cart context se addToCart function ko access kar rahe hain

  // Fishing experience ka item define kar rahe hain jo cart me add hoga
  const fishingItem = {
    id: 2, // Unique ID item ka
    name: 'Fishing Experience', // Item ka naam
    price: 79.99, // Item ki price in dollars
    description: 'A relaxing fishing experience by the water', // Item ka description
    image: 'https://images.unsplash.com/photo-1526625361769-ab16cb89b155?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Item ki image ka URL
  };

  const [numberOfPersons, setNumberOfPersons] = useState(1); // Number of persons ka state banaya hai jisme initial value 1 hai

  // Function jo number of persons ko 1 se barhata hai
  const increasePersons = () => {
    setNumberOfPersons((prev) => prev + 1); // Number of persons ko increase kar rahe hain by 1
  };

  // Function jo number of persons ko kam karta hai, lekin minimum value 1 rakhta hai
  const decreasePersons = () => {
    setNumberOfPersons((prev) => (prev > 1 ? prev - 1 : 1)); // Number of persons ko decrease kar rahe hain, lekin agar 1 hai to us se kam nahi hoga
  };

  return (
    <div className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"}`}>
      {/* Agar theme light mode hai to text black aur background white hoga, warna dark mode me text white aur background black */}
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text section: fishing experience ka heading aur details */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Fishing
              <br className="hidden lg:inline-block" />
              Find Your Peace by the Water
            </h1>
            <p className="mb-8 leading-relaxed">
              {/* Yeh paragraph fishing experience ke baare me user ko information de raha hai */}
              Cast your line into tranquil waters, the thrill of the catch waiting beneath the surface.
              Enjoy a peaceful day out in nature, surrounded by scenic views.
            </p>

            {/* Number of persons control section */}
            <div className="flex items-center mb-4">
              <button
                className="border rounded px-2 py-1 mr-2"
                onClick={decreasePersons} // Decrease button click hone par persons ko kam karega
              >
                -
              </button>
              <span className="text-lg">{numberOfPersons}</span> {/* Yahan number of persons ko display kar rahe hain */}
              <button
                className="border rounded px-2 py-1 ml-2"
                onClick={increasePersons} // Increase button click hone par persons ko barhaye ga
              >
                +
              </button>
            </div>

            {/* Add to Cart aur Home buttons */}
            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={() => addToCart({ ...fishingItem, quantity: numberOfPersons })} // Cart me fishing item aur persons ki quantity ko add kar rahe hain
              >
                Add to Cart
              </button>
              <Link to={"/Content"}> {/* Home page ke link ke liye */}
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Home
                </button>
              </Link>
            </div>
          </div>

          {/* Image section: fishing experience ki image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Fishing Experience" // Image ka alt text
              src={fishingItem.image} // Image ka source jo URL se aa raha hai
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fishing; // Component ko export kar rahe hain taake use kiya ja sake
