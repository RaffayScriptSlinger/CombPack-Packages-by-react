
import { Button } from "antd";
import { Link } from "react-router-dom";
import IslamicCard from "./islamicCard";

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
                        <IslamicCard 
                        img = "https://media.istockphoto.com/id/1495697075/photo/kaaba-in-masjid-al-haram-in-mecca-saudi-arabia.webp?a=1&b=1&s=612x612&w=0&k=20&c=D_Ws9_oVkSuYU2J6vfKfL3H9M_msxqQjPwJ_bm3ZZJk="
                        alt = "Hajj Package"
                        title = "Hajj Package"
                        description = " Experience the journey of a lifetime with our comprehensive Hajj packages, including guided tours, comfortable accommodation, and on-site support."
                        link = "/islamicForm"
                        />

                        <IslamicCard
                        img = "https://images.unsplash.com/photo-1695496270955-e484db7e58fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVtcmFofGVufDB8fDB8fHww"
                        alt = "Umrah Package"
                        title = "Umrah Package"
                        description = "Our Umrah package offers convenient options, flexible dates, and personalized guidance to help you complete your spiritual journey."
                        link = "/islamicForm"
                        />


                        <IslamicCard 
                        img = "https://plus.unsplash.com/premium_photo-1678553840209-d5cf6cebe448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW1pYyUyMHRvdXJ8ZW58MHx8MHx8fDA%3D"
                        alt="Islamic History Tour"
                        title = " Islamic History Tour"
                        description = "Discover Islamic heritage with guided tours of historical sites, including educational insights into Islamic history and culture."
                        link = "/islamicForm"
                        
                        />

                        
                        

                        
                      
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
