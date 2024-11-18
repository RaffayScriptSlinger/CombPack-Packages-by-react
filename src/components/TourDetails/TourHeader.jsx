import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useState } from 'react';
import { AlignCenterOutlined } from "@ant-design/icons";
import logo from "../../Images/Cp-Logo.png"

function TourHeader() {
    const { theme, ToggleTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    return (
        <div className={`${theme === "light" ? "bg-white shadow-md" : "bg-gray-800 text-white shadow-lg"} transition duration-300`}>
            <header className="body-font">
                <div className="container mx-auto flex flex-wrap p-5 items-center">
                    {/* Mobile View: Align Logo and Mobile Menu Button */}
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
                         
                            <img src={logo} alt="Logo Here" className="w-14 h-14 rounded-full" />
                            <span className="ml-3 text-xl">Cp Packages</span>
                        </Link>

                        {/* Mobile Navigation Button */}
                        <button
                            className="block md:hidden p-2 rounded-md   transition duration-200"
                            onClick={() => setOpen(!open)}
                        >
                            <AlignCenterOutlined style={{ fontSize: '20px' }} />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:ml-auto md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Home</Link>
                        <Link to="/TourDetails/Camping" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Camping</Link>
                        <Link to="/TourDetails/Hiking" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Hiking</Link>
                        <Link to="/TourDetails/MountainBike" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Mountain Bike</Link>
                        <Link to="/TourDetails/Fishing" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Fishing</Link>
                        <Link to="/Japan" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Japan</Link>
                        <Link to="/Maldives" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Maldives</Link>
                        <Button className="ml-5 border-gray-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                        {theme === "light" ? "Make It Dark" : "Make It Light"}
                    </Button>
                    </nav>

                    {/* Mobile Navigation Links */}
                    {open && (
                        <nav className="absolute z-10 top-16 left-0 right-0 bg-white shadow-lg p-5 md:hidden rounded-lg">
                            <div className="flex justify-between mb-4">
                                <h2 className="font-semibold text-gray-800">Menu</h2>
                            </div>
                            <div className="flex flex-col">
                            <Link to="/" className="mr-5 font-semibold hover:text-indigo-500 transition duration-200">Home</Link>
                                <Link to="/TourDetails/Camping" className="block mb-2 font-semibold text-gray-800 hover:text-indigo-500 transition duration-200" onClick={() => setOpen(false)}>Camping</Link>
                                <Link to="/TourDetails/Hiking" className="block mb-2 font-semibold text-gray-800 hover:text-indigo-500 transition duration-200" onClick={() => setOpen(false)}>Hiking</Link>
                                <Link to="/TourDetails/MountainBike" className="block mb-2 font-semibold text-gray-800 hover:text-indigo-500 transition duration-200" onClick={() => setOpen(false)}>Mountain Bike</Link>
                                <Link to="/TourDetails/Fishing" className="block mb-2 font-semibold text-gray-800 hover:text-indigo-500 transition duration-200" onClick={() => setOpen(false)}>Fishing</Link>
                                <Link to="/Japan" className="block mb-2 font-semibold text-gray-800 hover:text-indigo-500 transition duration-200" onClick={() => setOpen(false)}>Japan</Link>
                                <Link to="/Maldives" className="block mb-2 font-semibold text-gray-800 hover:text-indigo-500 transition duration-200" onClick={() => setOpen(false)}>Maldives</Link>
                                <Button className="ml-5 border-gray-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                        {theme === "light" ? "Make It Dark" : "Make It Light"}
                    </Button>
                            </div>
                        </nav>
                    )}

                    {/* Theme Toggle Button */}
                   
                </div>
            </header>
        </div>
    );
}

export default TourHeader;
