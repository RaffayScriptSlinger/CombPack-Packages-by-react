import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import  { ThemeContext } from "../../contexts/ThemeContext";
import { Button } from "antd";

export default function FormHeader() {
  const {theme,ToggleTheme} = useContext(ThemeContext)
  console.log(theme)
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={theme === "light" ? " bg-transparent text-black" : "bg-gray-800 text-white"}>
      <nav className=" ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Combpack Packages
            </span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)} 
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent  md:dark:bg-transparent ">
              <li>
              
                <Link to={"/"} className="block py-2 px-3 md:p-0  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                Home
              
                </Link>
                
              </li>

              <li>
              <Link
                 to={"/Content"}
                  className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dmd:dark:hover:bg-transparent"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
               to={"/Pricing"}
                  className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
               to={"/Contact"}
                  className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
               
              </li>
              <li>
              <Button  onClick={ToggleTheme}>
                  {theme == "light" ? "make it dark" : "make it light"}


                </Button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
