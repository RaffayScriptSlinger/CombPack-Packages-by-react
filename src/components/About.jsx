import Content from "./Content";
import Destination from "./Destination";
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import { Image  } from "antd";

function About() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `}>
            <section className=" body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    
                        <Image
                           className="object-cover object-center rounded-lg"
                           alt="hero"
                           src="https://images.unsplash.com/photo-1593644311729-d0b478c97d95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg-gray-50 rounded-lg p-2" >
                        <h1 className="title-font sm:text-4xl text-3xl mb-4  uppercase font-bold ">
                           
                            <span className="text-black ">   About Our</span>
                            <br className="hiddenlg:inline-block  " />
                            <span className="text-blue-500 ">  Agency.</span>
                        </h1>
                        <p className="mb-8 leading-relaxed text-black">
                            Discover hidden gems and embark on unique journeys with our carefully curated travel experiences. Whether you're exploring vibrant cities, indulging in local cuisine, or immersing yourself in cultural heritage, our tours are designed to offer authentic and memorable adventures. From eco-friendly trips to luxury escapes, we ensure every detail is crafted for your comfort and enjoyment. Let us guide you through breathtaking landscapes and unforgettable destinations.

                        </p>

                    </div>
                </div>
            </section>
            <section className=" body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>

                                <h1 className="uppercase font-bold ml-7">
                                    adventures & Travels.
                                </h1>


                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>

                                <p className=" font-semibold ml-7">
                                    Lorem ipsum dolor sit amet, consectetur adipis cing elit. Suspendisse molestie.
                                </p>


                            </div>

                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx={12} cy={5} r={3} />
                                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-indigo-600 mb-1 tracking-wider">
                                        Safety Always First
                                    </h2>
                                    <p className="leading-relaxed">
                                        Lorem ipsum dolor sit amet, cons ectetur adi piscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-indigo-600 mb-1 tracking-wider">
                                        Low Prices & Friendly
                                    </h2>
                                    <p className="leading-relaxed">
                                        Lorem ipsum dolor sit amet, cons ectetur adi piscing elit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <path d="M22 4L12 14.01l-3-3" />
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-indigo-600 mb-1 tracking-wider">
                                        FINISH
                                    </h2>
                                    <p className="leading-relaxed">
                                        Pitchfork ugh tattooed scenester echo park gastropub whatever
                                        cold-pressed retro.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                            src="https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="step"
                        />
                    </div>
                </div>
            </section>
            <Content/>
            <Destination/>
           


        </div>
    )

}
export default About;