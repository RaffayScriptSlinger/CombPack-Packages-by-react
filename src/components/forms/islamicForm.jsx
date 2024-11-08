import { useContext, useState } from "react"
import { userCredential } from "../../contexts/userContext"
import { db } from "../../utils/firebase"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2";
const today = new Date().toISOString().split('T')[0];


function IslamicForm() {
    const { user } = useContext(userCredential)
    console.log(user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Package, setPackage] = useState("")
    const [contactNumber, setcontactNumber] = useState()
    const [Travel, setTravel] = useState()
    const [Persons, setPersons] = useState()
    const [packagePricing, setpackagePricing] = useState(``)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const docRef = await addDoc(collection(db, "islamicTourPackages"), {
                name: user.name || name,
                email: user.email || email,
                contactNumber: contactNumber,
                Package: Package,
                Travel: Travel,
                Persons: Persons,
                packagePricing : packagePricing,


            });
            Swal.fire("Your Booking Is Conform Our Team will contact You Soon")

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            Swal.fire("Something Went wrong")
        }

        setPackage(""),

            setPersons(""),

            setcontactNumber(""),

            setTravel("")


    }



    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap-reverse items-center">
                    <div className="lg:w-2/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mx-auto ">
                        <iframe width="100%" height="
                    315" src="https://www.youtube.com/embed/Tf_avSUYYi0?si=QeAC3zqT33Mla9Q3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="pb-3"></iframe>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/mxUW9A2PMqk?si=Y7wC9-4q-hYs0dXJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="pb-3"></iframe>

                    </div>
                    <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                            Book Your Package
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full-name"
                                value={user.name || ""}

                                onChange={
                                    (e) => { setName(e.target.value) }
                                }
                                name="full-name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={user.email || ""}
                                onChange={(e) => { setEmail((e.target.value)) }}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Contact Number
                            </label>

                            <input
                                type="number"
                                id="contactNumber"
                                name="contactNumber"
                                value={contactNumber}
                                onChange={(e) => setcontactNumber((e.target.value))}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="0123-4561350"
                                maxLength={11}
                                minLength={11}
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Travel Date
                            </label>
                            <input
                                type="Date"
                                id="TravelDate"
                                onChange={
                                    (e) => { setTravel(e.target.value) }
                                }
                                value={Travel}
                                name="Travel-Date"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                min={today}
                            />
                        </div>


                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                                Persons
                            </label>
                            <input
                                type="number"
                                id="persons"
                                value={Persons}
                                onChange={
                                    (e) => { setPersons(e.target.value) }
                                }
                                name="persons"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                min={0}
                                max={50}

                            />
                        </div>


                        <div className="relative mb-4">
                            <label htmlFor="text" className="leading-7 text-sm text-gray-600">
                                Select Your Package
                            </label>
                            <select name="" id="" className="w-full p-2 border " onChange={(e) => setPackage((e.target.value))}
                                value={Package}>
                                <option value=""> Select Package</option>
                                <option value="Haj Package">HAJ Package</option>
                                <option value="Umrah Package">UMRAH Package</option>
                                <option value="Islamic Tour" >Islamic History Tour</option>
                            </select>
                        </div>



                        <div className="relative mb-4">
                            <label htmlFor="text" className="leading-7 text-sm text-gray-600">
                                Select Your Package Pricing
                            </label>
                            <select name="" id="" className="w-full p-2 border " onChange={(e) => setpackagePricing((e.target.value))}
                                value={packagePricing}>
                                <option value="" className="bg-gray-300">Select a Package Type</option>
                                <option value="Start" className="bg-gray-300">Start</option>
                                <option value="PRO" className="bg-gray-300">PRO </option>
                                <option value="BUSINESS" className="bg-gray-300">BUSINESS</option>
                                <option value="SPECIAL" className="bg-gray-300">SPECIAL</option>
                            </select>
                        </div>



                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>
                            Conform Booking
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Literally you probably haven't heard of them jean shorts.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default IslamicForm

