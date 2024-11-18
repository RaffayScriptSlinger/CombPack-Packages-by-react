
import { Button } from "antd";
import { Link } from "react-router-dom";

function IslamicDisplay() {
    return (
        <div >
            <section className=" body-font overflow-hidden container mx-auto" >

                <div className="container py-12 md:py-24 px-5 ">
                    {/* <h1 className="text-4xl  font-bold mb-10 sm:text-3xl uppercase  ">Islamic <span className="text-indigo-500">Packages</span> </h1> */}
                    <div className="lg:w-1/2 w-full  lg:mb-0 text-5xl">
          <h1 className=" text-2xl   md:text-3xl  font-bold  uppercase title-font    ">
            Islamic
            <br />
            <span className="text-blue-500">
              Packages.
            </span>

          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded lg:mb-6 mb-2" />
        </div>
                    <div className="flex flex-wrap -m-4">

                        {/* Hajj Package */}
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2  border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://media.istockphoto.com/id/1495697075/photo/kaaba-in-masjid-al-haram-in-mecca-saudi-arabia.webp?a=1&b=1&s=612x612&w=0&k=20&c=D_Ws9_oVkSuYU2J6vfKfL3H9M_msxqQjPwJ_bm3ZZJk="
                                    alt="Hajj Package"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                                        Islamic Packages
                                    </h2>
                                    <h1 className="title-font text-lg font-medium  mb-3">
                                        Hajj Package
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Experience the journey of a lifetime with our comprehensive Hajj packages, including guided tours, comfortable accommodation, and on-site support.
                                    </p>
                                    <Link to={"/islamicForm"}>
                                        <Button>
                                            Book Now
                                        </Button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        {/* Umrah Package */}
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2  border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://media.istockphoto.com/id/1944011029/photo/muslim-praying-to-allah-in-front-of-kaaba-islam-iconic-mosque-al-haram-mecca-saudi-arabia.webp?a=1&b=1&s=612x612&w=0&k=20&c=VyH0ERg1P3ZARfY37rqypJMgIVbzbpb8kLNdvcfhbJQ="
                                    alt="Umrah Package"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                                        Islamic Packages
                                    </h2>
                                    <h1 className="title-font text-lg font-medium  mb-3">
                                        Umrah Package
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Our Umrah package offers convenient options, flexible dates, and personalized guidance to help you complete your spiritual journey.
                                    </p>
                                    <Link to={"/islamicForm"}>
                                        <Button>
                                            Book Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Islamic History Tour */}
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2  border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                                    src="https://plus.unsplash.com/premium_photo-1678553840209-d5cf6cebe448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW1pYyUyMHRvdXJ8ZW58MHx8MHx8fDA%3D"
                                    alt="Islamic History Tour"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                                        Islamic Packages
                                    </h2>
                                    <h1 className="title-font text-lg font-medium  mb-3">
                                        Islamic History Tour
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Discover Islamic heritage with guided tours of historical sites, including educational insights into Islamic history and culture.
                                    </p>
                                    <Link to={"/islamicForm"}>
                                        <Button>
                                            Book Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"/AllPackages"} className="flex justify-center mt-4">
                    <Button >
                        View More...
                    </Button>
                </Link>
                </div>
                


            </section>
        </div>
    );
}

export default IslamicDisplay;
