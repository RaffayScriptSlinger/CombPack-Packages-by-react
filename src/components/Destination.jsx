import { Button, Image } from "antd"

function Destination() {
  return (
    <div className="container px-5 py-24 mx-auto">

      <div className="flex flex-wrap w-full mb-20 ">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-5xl">
          <h1 className=" text-4xl  sm:text-3xl  font-bold  uppercase title-font mb-2   ">
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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">

                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://images.unsplash.com/photo-1505440484611-23c171ad6e96?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                />
              </div>
              <h2 className="title-font text-2xl font-medium  mt-6 mb-3">
                Kyoto , Japan
              </h2>
              <p className="leading-relaxed text-base">
                Experience Japan's vibrant culture and culinary delights. Savor sushi and ramen, explore cherry blossoms, ancient temples, and enjoy the perfect blend of tradition and modernity.

              </p>
<Button className="text-center text-indigo-600">
  Book 
</Button>

            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                />
              </div>
              <h2 className="title-font text-2xl font-medium  mt-6 mb-3">
                Maldives
              </h2>
              <p className="leading-relaxed text-base">
                Explore the Maldives, where turquoise waters and pristine beaches await. Enjoy luxury in overwater bungalows, indulge in fresh seafood, and experience relaxation in this tropical paradise.

              </p>
              <Button className="text-center text-indigo-600">
                Book 
              </Button>

            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
export default Destination