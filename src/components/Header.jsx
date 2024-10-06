import { Link } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext"
import { Button } from "antd";




function Header() {
    const { theme, ToggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <header className={`${theme === "light" ? "bg-white text-black py-2" : "bg-black text-white py-2"}  ` }>


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
                        <span className="ml-3 text-xl">Combpack Packages</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-blue-500" to={'/'}>Home</Link>
                        <Link className="mr-5  hover:text-blue-500" to={'/About'}>Tours Page</Link>
                        <Link className="mr-5 hover:text-blue-500" to={'/Agency'}>News</Link>
                        <Link className="mr-5 hover:text-blue-500" to={'/Contact'}>Contact </Link>
                    </nav>
                    <Button className=" border-red-700 border" onClick={ToggleTheme}>
                        {theme === "light" ? "Make It Dark" : "Make It Light"}
                    </Button>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none 
                    hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2 text-black">
                        <Link to={"/SignUp"}>SignUp</Link>

                    </button>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">
                        <Link to={"/Login"}>Login</Link>
                    </button>


                </div>
            </header>

        </div>
    )

}

export default Header


