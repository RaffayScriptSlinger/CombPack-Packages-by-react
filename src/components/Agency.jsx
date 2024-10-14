import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
function Agency() {
    const { theme  } = useContext(ThemeContext);
    return (
        <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `}>
            <section className=" body-font">
                <div className="container px-5 pt-6 mx-auto py-10">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-3xl  title-font mb-4  font-bold">
                            Agency
                            <br />
                            <span className="text-blue-500">
                                Achievement.

                            </span>

                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever the agency, from creative campaigns to innovative strategies, we prioritize client success and sustainable growth. Our team has spearheaded transformative projects that redefine industry standards, showcasing expertise in digital marketing, branding, and engagement. Through collaborative efforts and a commitment to excellence, we empower brands to reach new heights and foster authentic connections with their audiences.


                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 17l4 4 4-4m-4-5v9" />
                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                                </svg>
                               
                                <h2 className="title-font font-medium text-3xl ">
                                    4500+
                                </h2>
                                <p className="leading-relaxed">Happy Travelers</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx={9} cy={7} r={4} />
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl ">
                                92.8%
                                </h2>
                                <p className="leading-relaxed">Reviews</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl ">15k+</h2>
                                <p className="leading-relaxed">Winning Award</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <h2 className="title-font font-medium text-3xl ">1000+</h2>
                                <p className="leading-relaxed">Tours Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default Agency;