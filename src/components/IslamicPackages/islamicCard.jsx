import { Image ,Button} from "antd";
import { Link } from "react-router-dom";



function IslamicCard(props){
    return(
        <div className="p-4 md:w-1/3">
        <div className="h-full border-2  border-opacity-60 rounded-lg overflow-hidden">
            <Image
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={props.img}
                alt={props.alt}
            />
            <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                    Islamic Packages
                </h2>
                <h1 className="title-font text-lg font-medium  mb-3">
                   {props.title}
                </h1>
                <p className="leading-relaxed mb-3">
                   {props.description}
                </p>
                <Link to={props.link}>
                    <Button>
                        Book Now
                    </Button>
                </Link>

            </div>
        </div>
    </div>

    )
}

export default IslamicCard;