import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Button } from "antd";
import { userCredential } from "../contexts/userContext";
import { auth } from "../utils/firebase";
import Logo from "../Images/Cp-Logo.png"

function Header() {
    const { theme, ToggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { user } = useContext(userCredential);
    console.log(user)


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    function signOutUser() {
        auth.signOut().then(() => {
            console.log("User signed out successfully");


        }).catch((error) => {
            console.error("Error signing out: ", error);
        });
    }


    return (
        <header className={`${theme === "light" ? "bg-white shadow-md" : "bg-gray-800 text-white shadow-lg"} py-4`}>
            <div className="container mx-auto flex items-center justify-between px-4">
                <a className="flex title-font font-medium items-center text-xl">

                    <img src={Logo} alt="Logo Here" className=" h-14 w-14   rounded-full" />
                    <span className="ml-3">Combpack Packages</span>
                </a>

                <nav className="hidden md:flex items-center space-x-4">
                    <Link className=" font-semibold  hover:text-indigo-600" to="/">Home</Link>
                    <Link className=" font-semibold hover:text-indigo-600" to="/About">Tours Page</Link>
                    <Link className=" font-semibold hover:text-indigo-600" to="/Agency">News</Link>
                    <Link className=" font-semibold hover:text-indigo-600" to="/Contact">Contact</Link>

                </nav>

                <button
                    className="md:hidden ml-auto p-2 rounded focus:outline-none"

                    onClick={toggleMenu}
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${theme === "light" ? "text-black" : "text-white"} h-6 w-6 `}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>


                <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={toggleMenu}></div>
                <div className={`fixed top-0 left-0 w-64 ${theme === "light" ? "bg-white" : "bg-black"} dark:bg-gray-800 h-full shadow-lg transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} z-50`}>
                    <div className="flex justify-between items-center p-4">
                        <span className="font-bold text-xl text-indigo-600">CombPack Packages</span>
                        <button className="text-black dark:text-white" onClick={toggleMenu}>
                            &times;
                        </button>
                    </div>
                    <nav className="flex flex-col p-4">
                        <Link className="py-2 text-center font-semibold hover:text-indigo-600  " to="/" onClick={toggleMenu}>Home</Link>
                        <Link className="py-2 text-center font-semibold hover:text-indigo-600 " to="/About" onClick={toggleMenu}>Tours Page</Link>
                        <Link className="py-2 text-center font-semibold hover:text-indigo-600 " to="/Agency" onClick={toggleMenu}>News</Link>
                        <Link className="py-2 text-center font-semibold hover:text-indigo-600 " to="/Contact" onClick={toggleMenu}>Contact</Link>
                        <Button className="border-gray-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                            {theme === "light" ? "Make It Dark" : "Make It Light"}
                        </Button>
                        <div className="flex justify-evenly items-center  p-3 mt-2 ">
                            {!user ? <Link to="/SignUp">
                                <Button >
                                    SignUp
                                </Button>
                            </Link> : <Button onClick={signOutUser}>Sign Out</Button>}
                            {user ? <Link to={"/userPackages"}>
                                <Button >
                                    Your Tours
                                </Button>
                            </Link>

                                : ""}
                        </div>
                    </nav>
                </div>

                <div className="hidden md:flex items-center space-x-4">


                    <Button className="border-red-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                        {theme === "light" ? "Make It Dark" : "Make It Light"}
                    </Button>

                    {user ? <Button onClick={signOutUser}>SignOut</Button> : <Link to="/SignUp">
                        <Button >
                            Sign Up
                        </Button>
                    </Link>}
                    {user ? <Link to={"/userPackages"}>
                        <Button >
                            Your Tours
                        </Button>
                    </Link>

                        : ""}
                </div>
            </div>
        </header>
    );
}

export default Header;
