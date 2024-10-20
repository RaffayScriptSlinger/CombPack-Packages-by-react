import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"




function Japan() {
    const { theme } = useContext(ThemeContext)


    return (
        <div className={`${theme == "light" ? "bg-white text-gray-900" : "bg-black text-white"}`}>
            <section className=" body-font">
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="https://images.unsplash.com/photo-1505440484611-23c171ad6e96?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 ">
                                    <img src="https://plus.unsplash.com/premium_photo-1718146019142-947ee0c20f01?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-lg " alt="" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-indigo-500 text-lg">
                                        Phoebe Caulfield
                                    </h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                    <p className="text-base">
                                        Raclette knausgaard
                                        sartorial venmo tbh hot chicken gentrify portland.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    Japan is an island nation in East Asia, known for its rich cultural heritage, technological advancements, and beautiful landscapes. It consists of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—along with thousands of smaller islands. Japan's capital, Tokyo, is one of the largest and most densely populated cities in the world, famous for its mix of modern skyscrapers, historical temples, and cultural landmarks
                                </p>
                                <div className="flex  align-middle">
                                    <Link to={"/Form"} className="text-indigo-500 inline-flex items-center" href="https://en.wikipedia.org/wiki/Japan" target="blank">

                                        Book Now
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>

                                    </Link>
                                    <Link to={"/faqs"}>
                                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                            FAQs
                                        </button>
                                    </Link>



                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
export default Japan