import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { Button } from "antd";




function TourHeader() {
    const { theme, ToggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${theme === "light" ? "bg-white shadow-md" : "bg-gray-800 text-white shadow-lg"} `}>

            <header className=" body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
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
                        <span className="ml-3 text-xl">Cp Packages</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to={"/TourDetails/Camping"} className="mr-5 font-semibold hover:text-indigo-500 border-2   border-gray-200 rounded  lg:border-0">
                            Camping
                        </Link>


                        <Link to={"/TourDetails/Hiking"} className="mr-5 font-semibold hover:text-indigo-500  border-2   border-gray-200 rounded  lg:border-0">Hiking</Link>
                        <Link to={"/TourDetails/MountainBike"} className="mr-5 font-semibold hover:text-indigo-500   border-2   border-gray-200 rounded  lg:border-0        ">Mountain Bike</Link>
                        <Link to={"/TourDetails/Fishing"} className="mr-5 font-semibold hover:text-indigo-500  border-2   border-gray-200 rounded  lg:border-0">Fishing</Link>
                        <Link to={"/Japan"} className="mr-5 font-semibold hover:text-indigo-500 border-2   border-gray-200 rounded  lg:border-0">Japan</Link>
                        <Link to={"/Maldives"} className="mr-5 font-semibold hover:text-indigo-500 border-2   border-gray-200 rounded  lg:border-0 ">Maldives</Link>
                    </nav>
                    <Button className="border-gray-700 border transition-transform transform hover:scale-105" onClick={ToggleTheme}>
                        {theme === "light" ? "Make It Dark" : "Make It Light"}
                    </Button>


                </div>
            </header>

        </div>
    )
}

export default TourHeader;








