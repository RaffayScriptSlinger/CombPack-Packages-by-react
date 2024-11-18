import { Link } from "react-router-dom"
import { Button, Image } from "antd"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

function AllPackages() {

  const {theme} = useContext(ThemeContext)
    return (
        <div className={theme === "light" ?  "bg-white text-black" : "bg-black text-white"}>
            <section className="body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
     
      
        <img src="https://images.unsplash.com/photo-1693590614566-1d3ea9ef32f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFqfGVufDB8fDB8fHww" className=" w-full h-full rounded-full"  alt="" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className=" text-lg title-font font-medium mb-2">
          Shooting Stars
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
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
          
        </a>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className=" text-lg title-font font-medium mb-2">
          The Catalyzer
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
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
     
        </a>
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 ">
       
             <img src="https://images.unsplash.com/photo-1575101261474-5cb5653bb416?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVtcmFofGVufDB8fDB8fHww" alt="" className="w-full h-full rounded-full object-cover" />
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        
        <img src="https://images.unsplash.com/photo-1574246604907-db69e30ddb97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fElzbGFtaWMlMjB0b3VyfGVufDB8fDB8fHww"  className="  w-full h-full rounded-full object-cover"alt="" />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className=" text-lg title-font font-medium mb-2">
          The 400 Blows
        </h2>
        <p className="leading-relaxed text-base">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine.
        </p>
        <a className="mt-3 text-indigo-500 inline-flex items-center">
          Learn More
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
        </a>
      </div>
    </div>
    <Link to="/islamicForm" className="flex justify-center text-center mt-3">
    <Button >Book Now</Button>

    
    </Link>
  
  </div>
</section>



        </div>
    )
}
export default AllPackages