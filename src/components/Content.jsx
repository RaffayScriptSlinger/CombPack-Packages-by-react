import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import { Button, Image } from "antd";
import { Link } from "react-router-dom";

function Content() {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `}>
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-5xl">
              <h1 className=" text-5xl  sm:text-3xl  font-bold  uppercase title-font mb-2   ">
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
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"
                />

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Where Nature Meets Adventure
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Camping
                </h2>
                <p className="leading-relaxed text-base">
                  Escape the city and reconnect with nature. Enjoy campfires, stargazing, and hiking for a refreshing outdoor retreat Camping.
                </p>
                <div className="flex justify-center text-center">
                  <Link to={"/TourDetails/Camping"} >
                    <Button className="text-indigo-600 font-semibold text-center" >
                      view More
                    </Button>
                  </Link>

                </div>

              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">

                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"

                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Where Every Step Tells a Story
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Hiking
                </h2>
                <p className="leading-relaxed text-base">
                  Embrace hiking and explore scenic trails. From mountain paths to forest walks, discover nature and adventure at every step.


                </p>
                <div className="flex justify-center text-center">
                  <Link to={"/TourDetails/Hiking" } >

                    <Button className="text-indigo-600 font-semibold text-center" > 
                      view More
                    </Button>
                  </Link>

                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://plus.unsplash.com/premium_photo-1663013212103-d68586132dfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"

                />

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Ride the Wild
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Mountain Bike
                </h2>
                <p className="leading-relaxed text-base">
                  Experience the thrill of mountain biking on rugged trails. Conquer tough terrains and feel the adrenaline with every pedal stroke.

                </p>
                <div className="flex justify-center text-center">
                  <Link to={"/TourDetails/MountainBike"} >

                    <Button className="text-indigo-600 font-semibold text-center">
                      view More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://images.unsplash.com/photo-1526625361769-ab16cb89b155?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"

                />

                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  Find Your Peace by the Water
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Fishing
                </h2>
                <p className="leading-relaxed text-base">
                  Cast your line and enjoy the serenity of fishing. Experience the thrill of the catch while relaxing by the water and connecting with nature.


                </p>
                <div className="flex justify-center text-center">
                  <Link to={"/TourDetails/Fishing"} >

                    <Button className="text-indigo-600 font-semibold text-center">
                      view More
                    </Button>
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
export default Content