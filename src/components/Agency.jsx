import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import AgencyCard from "./AgencyCard";


function Agency() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `}>
            <section className=" body-font">
                <div className="container px-5 py-12 mx-auto ">
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
                        <AgencyCard
                            title="Happy Travelers"
                            Numbers="4500+"
                            pathOne="M8 17l4 4 4-4m-4-5v9"
                            pathTwo="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"


                        />

                        <AgencyCard
                        title = "Reviews"
                        Numbers = " 92.8%"
                        pathOne = "M3 18v-6a9 9 0 0118 0v6"
                        pathTwo = "M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                        />
                        <AgencyCard 
                        title = "Winning Award"
                        Numbers = "15k+"
                        pathOne = "M3 18v-6a9 9 0 0118 0v6"
                        pathTwo = "M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                        />

                        <AgencyCard 
                        title = "Tours Success"
                        Numbers = "1000+"
                        pathOne ="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        
                        />
                        
                    
                        
                    </div>
                </div>
            </section>


        </div>
    )
}
export default Agency;