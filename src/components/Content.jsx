import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import { Button, Image } from "antd";
import { Link } from "react-router-dom";
import IslamicDisplay from "./IslamicPackages/mainDisplay";
import TourCard from "./TourCard";


function Content() {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `} id="">
      <section className=" body-font">
        <div className="container px-5 py-12  mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
              <h1 className=" text-xl  md:text-3xl  font-bold  uppercase title-font mb-2   ">
                Popular
                <br />
                <span className="text-blue-500">
                  Activities
                </span>

              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>

            <p className="lg:w-1/2 w-full leading-relaxed ">
              <span>Explore & Adventure </span>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably haven't
              heard of them man bun deep jianbing selfies heirloom prism food truck
              ugh squid celiac humblebrag.
            </p>

          </div>
          <div className="flex flex-wrap -m-4 text-black" >


            <TourCard
              img="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Camping"
              subtitle="Where Nature Meets Adventure"
              description=" Escape the city and reconnect with nature. Enjoy campfires, stargazing, and hiking for a refreshing outdoor retreat Camping."
              Link="/TourDetails/Camping" />


            <TourCard img="https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             title="Hiking" 
             subtitle="Where Every Step Tells a Story" 
             description=" Embrace hiking and explore scenic trails. From mountain paths to forest walks, discover nature and adventure at every step." 
             Link="/TourDetails/Hiking" />

             <TourCard 
             img = "https://plus.unsplash.com/premium_photo-1663013212103-d68586132dfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             title = " Mountain Bike"
             subtitle = "Ride the Wild"
             description = "  Experience the thrill of mountain biking on rugged trails. Conquer tough terrains and feel the adrenaline with every pedal stroke."
             Link = "/TourDetails/MountainBike"
             />
             <TourCard 
             img  =  "https://images.unsplash.com/photo-1526625361769-ab16cb89b155?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             title = "Fishing"
             subtitle = "Find Your Peace by the Water"
             description = "Cast your line and enjoy the serenity of fishing. Experience the thrill of the catch while relaxing by the water and connecting with nature."
             Link = "/TourDetails/Fishing"
             />
   
          </div>
        </div>
      </section>
      <IslamicDisplay />


    </div>
  )
}
export default Content