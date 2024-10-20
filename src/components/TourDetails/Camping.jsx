import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";


function Camping() {
 
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>

      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
       
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Camping <br className="hidden lg:inline-block" />
              Where Nature Meets Adventure
            </h1>
            <p className="mb-8 leading-relaxed">
              Escape the daily grind and reconnect with the wilderness. Enjoy scenic trails, stargazing, and campfire adventures.
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
            <img className="object-cover object-center rounded" alt="Camping" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Camping;
