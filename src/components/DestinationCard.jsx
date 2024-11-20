import { Link } from "react-router-dom";
import { Button ,Image } from "antd";

function DestinationCard(props){
    return(
        <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">

                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={props.img}

                />
              </div>
              <h2 className="title-font text-2xl font-medium  mt-6 mb-3">
                {props.title}
              </h2>
              <p className="leading-relaxed text-base">
              {props.description}

              </p>
              <Link to={props.link} >
                <Button className="text-center text-indigo-600">
                 Book Now
                </Button>
              </Link>


            </div>

    )
}
export default DestinationCard;