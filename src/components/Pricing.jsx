import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import PricingCard from "./PricingCard"

function Pricing() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={theme == "light" ? "text-black bg-white" : "text-white bg-black"}>
            <section className=" body-font overflow-hidden">
                <div className="container lg:px-12 px-4 mx-auto py-16">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 ">
                            Pricing
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
                        </p>

                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">

                            <PricingCard
                                category="Start"
                                price="$10"

                            />
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <PricingCard
                                category="Pro"
                                price="$20"
                            />
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <PricingCard
                                category="Buisness"
                                price="$50"
                            />
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <PricingCard
                                category="Special"
                                price="$80"
                            />



                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Pricing