import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"


function Maldives() {
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
                                src="https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img src="https://plus.unsplash.com/premium_photo-1718146019142-947ee0c20f01?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-lg" alt="" />
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
                                    The Maldives is celebrated for its natural beauty, offering opportunities for snorkeling, diving, and water sports, thanks to its abundant sea life and coral reefs. The country is also at the forefront of environmental conservation efforts, given the rising threat of climate change and rising sea levels. Tourism, fishing, and agriculture are the key contributors to the economy. Despite its modernization, the Maldives maintains its strong cultural heritage, influenced by South Asian, Arab, and African traditions
                                </p>
                                <Link to={"/Form"} className="text-indigo-500 inline-flex items-center" >
                                  
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
            </section>


        </div>
    )
}
export default Maldives
