import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Fishing() {
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`${theme === "light" ? "text-black bg-white" : "text-white bg-black"}`}>

      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Fishing
              <br className="hidden lg:inline-block" />
              Find Your Peace by the Water
            </h1>
            <p className="mb-8 leading-relaxed">

              Cast your line into tranquil waters, the thrill of the catch waiting beneath the surface.
              Enjoy a peaceful day out in nature, surrounded by scenic views.
            </p>


            <div className="flex justify-center">
              <Link to={"/Form"}>
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                // Cart me fishing item aur persons ki quantity ko add kar rahe hain
                >
                  Book Now
                </button>
              </Link>

              <Link to={"/faqs"}> {/* Home page ke link ke liye */}
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  FAQs
                </button>
              </Link>
            </div>
          </div>


          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Fishing Experience"
              src="https://images.unsplash.com/photo-1526625361769-ab16cb89b155?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image ka source jo URL se aa raha hai
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fishing; 
