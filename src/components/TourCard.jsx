import { Link } from "react-router-dom";
import { Button, Image } from "antd";


function TourCard(props) {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={props.img}
                    alt={props.title} // more descriptive alt text
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {props.subtitle}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {props.title}
                </h2>
                <p className="leading-relaxed text-base">
                    {props.description} {/* Fixed spelling: "discription" to "description" */}
                </p>
                <div className="flex justify-center text-center">
                    <Link to={props.Link}>
                        <Button className="text-indigo-600 font-semibold text-center">
                            View More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TourCard;
