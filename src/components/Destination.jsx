import DestinationCard from "./DestinationCard"

function Destination() {
  return (
    <div className="container px-5  mx-auto">

      <div className="flex flex-wrap w-full  ">
        <div className="lg:w-1/2 w-full  lg:mb-0 text-5xl">
          <h1 className=" text-xl  sm:text-3xl  font-bold  uppercase title-font mb-2   ">
            destinations
            <br />
            <span className="text-blue-500">
              Available.
            </span>

          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" />
        </div>

        <p className="lg:w-1/2 w-full leading-relaxed ">
          <h1>Around The World</h1>
          Discover breathtaking destinations that await your visit. From serene mountain retreats to vibrant coastal towns, each location offers unique experiences. Whether you're seeking adventure in nature or cultural exploration in bustling cities, there's a perfect spot for everyone to enjoy.
        </p>

      </div>
      <section className=" body-font">
        <div className="container px-5 sm:pt-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <DestinationCard
              img="https://images.unsplash.com/photo-1505440484611-23c171ad6e96?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title=" Kyoto , Japan"
              description=" Experience Japan's vibrant culture and culinary delights. Savor sushi and ramen, explore cherry blossoms, ancient temples, and enjoy the perfect blend of tradition and modernity."
              link="/Japan"

            />

            <DestinationCard
              img="https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Maldives"
              description="Explore the Maldives, where turquoise waters and pristine beaches await. Enjoy luxury in overwater bungalows, indulge in fresh seafood, and experience relaxation in this tropical paradise."
              link="/Maldives"
            />

          </div>
        </div>
      </section>


    </div>
  )
}
export default Destination