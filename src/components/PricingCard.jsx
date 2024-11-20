import { Link } from "react-router-dom";



function PricingCard(props){
    return(
        <>
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden  ">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    {props.category}
                                </h2>
                                <h1 className="text-5xl  pb-4 mb-4 border-b border-gray-200 leading-none">
                                    {props.price}
                                </h1>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Vexillologist pitchfork
                                </p>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Tumeric plaid portland
                                </p>
                                <p className="flex items-center  mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    Mixtape chillwave tumeric
                                </p>

                                <Link to={"/Form"} className="mt-auto">
                                    <button className="flex items-center  text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                        Book Now
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 ml-auto"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                                <p className="text-xs mt-3">
                                    You are Able To Book Tour In Very Responsible Price
                                </p>
                            </div>
        
        </>
    )
}
export default PricingCard;