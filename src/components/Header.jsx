

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "antd";

function Header() {
    const { theme, ToggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${theme === "light" ? "bg-white shadow-md" : "bg-gray-800 text-white shadow-lg"} py-4`}>
            <div className="container mx-auto flex items-center justify-between px-4">
                <a className="flex title-font font-medium items-center text-xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3">Combpack Packages</span>
                </a>

                {/* Navigation Links for Desktop */}
                <nav className="hidden md:flex items-center space-x-4">
                    <Link className="hover:text-indigo-600" to="/">Home</Link>
                    <Link className="hover:text-indigo-600" to="/About">Tours Page</Link>
                    <Link className="hover:text-indigo-600" to="/Agency">News</Link>
                    <Link className="hover:text-indigo-600" to="/Contact">Contact</Link>

                </nav>

                <button
                    className="md:hidden ml-auto p-2 rounded focus:outline-none"
                    onClick={toggleMenu}
                >
                    {/* Hamburger Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Off-Canvas Menu for Mobile */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleMenu}></div>
                <div className={`fixed top-0 left-0 w-64 bg-white dark:bg-gray-800 h-full shadow-lg transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}>
                    <div className="flex justify-between items-center p-4">
                        <span className="font-bold text-xl text-indigo-600">CombPack Packages</span>
                        <button className="text-black dark:text-white" onClick={toggleMenu}>
                            &times;
                        </button>
                    </div>
                    <nav className="flex flex-col p-4">
                        <Link className="py-2 text-center hover:text-indigo-600 text-indigo-600 " to="/" onClick={toggleMenu}>Home</Link>
                        <Link className="py-2 text-center hover:text-indigo-600  text-indigo-600" to="/About" onClick={toggleMenu}>Tours Page</Link>
                        <Link className="py-2 text-center hover:text-indigo-600  text-indigo-600" to="/Agency" onClick={toggleMenu}>News</Link>
                        <Link className="py-2 text-center hover:text-indigo-600  text-indigo-600" to="/Contact" onClick={toggleMenu}>Contact</Link>
                        <Button className="border-gray-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                            {theme === "light" ? "Make It Dark" : "Make It Light"}
                        </Button>
                        <div className="flex justify-evenly items-center  p-3 mt-2 ">

                        <Link to="/SignUp">
                            <Button className="border-gray-700 border transition-transform transform hover:scale-105">
                                SignUp
                            </Button>
                        </Link>
                        {/* <Link to="/Login">
                            <Button className="border-gray-700 border transition-transform transform hover:scale-105">
                                Login
                            </Button>
                        </Link> */}
                        </div>
                        

                    </nav>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Button className="border-red-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                        {theme === "light" ? "Make It Dark" : "Make It Light"}
                    </Button>
                    <Link to="/SignUp">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 rounded text-base text-black hover:bg-gray-200 transition-colors">
                            SignUp
                        </button>
                    </Link>
                    {/* <Link to="/Login">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 rounded text-base text-black hover:bg-gray-200 transition-colors">
                            Login
                        </button>
                    </Link> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
