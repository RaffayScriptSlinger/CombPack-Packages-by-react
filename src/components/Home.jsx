import { Image } from "antd"
import { ThemeContext } from "../contexts/ThemeContext"
import About from "./About"
import Agency from "./Agency"
import Contact from "./Contact"
import { useContext } from "react"
import { Link } from "react-router-dom"
import Pricing from "./Pricing"




function Home() {
  const { theme } = useContext(ThemeContext);
  return (

    <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `}>


      <section className=" body-font ">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4   font-bold">
              TOUR & TRAVEL <span className="text-blue-500">AGENCY</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Explore the world with us, your trusted travel partner. Whether it's a dreamy escape to tropical beaches, a thrilling adventure through mountains, or an immersive cultural experience in exotic cities, we’ve got you covered. Our tours are crafted to give you unforgettable memories. From family-friendly packages to solo trips, we cater to every traveler's dream. Book your next journey

            </p>
            <div className="flex w-full md:justify-start justify-center items-end">

              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
               <Link to={"/Content"} >  LET'S GET STARTED</Link>
              </button>
            </div>


          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          
            <Image className="object-cover object-center rounded"
            alt="hero"
              src="https://images.unsplash.com/photo-1683558351039-8fec1c8e6ff0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

            />
          </div>
        </div>
      </section>
      <About />
      
      <Pricing />
      <Agency />
      <Contact />
    </div>
  )
}
export default Home