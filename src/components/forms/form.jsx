import { useState, useContext } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../contexts/ThemeContext";
import { userCredential } from "../../contexts/userContext";

function Form() {
    const { user } = useContext(userCredential);
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [travelDate, setTravelDate] = useState()
    const [Package, setPackage] = useState('')
    const [Phone, setPhone] = useState()
    const [number, setNumber] = useState('')
    const [Req, setReq] = useState(``)
    const Navigate = useNavigate()
    const today = new Date().toISOString().split('T')[0];
    console.log(user)

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addDoc(collection(db, "Tour"), {
                name: name,
                email: email,
                Package: Package,
                Phone: Phone,
                Req: Req,
                number: number,
                travelDate: travelDate

            });




            Swal.fire({
                title: "Your Package  Has Been Booked Successfully",
                text: "Our Team Will Contact You soon!",
                icon: "success"
            });

            setName("");
            setEmail("");
            setTravelDate("");
            setPackage("");
            setPhone("");
            setNumber("");
            setReq("");
            Navigate("/")


        } catch (e) {
            console.error("Error adding document: ", e);
            Swal.fire("Error", "Please try again", "error")
        }

    }
    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-indigo-500"} mt-3`}>
            <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Booking Form</h2>

                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name || ""}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email || ""}
                        readOnly

                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                {/* Travel Date Field */}
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Travel Date</label>
                    <input
                        type="date"
                        id="date"
                        name="travelDate"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required
                        min={today} // This restricts the user from selecting past dates



                    />
                </div>

                {/* Package Type Field */}
                <div className="mb-4">
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700">Package Type</label>
                    <select
                        id="package"
                        name="packageType"
                        value={Package}
                        onChange={(e) => setPackage(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required


                    >
                        <option value="" className="bg-gray-300">Select a Package</option>
                        <option value="Hiking" className="bg-gray-300">Hiking</option>
                        <option value="Fishing" className="bg-gray-300">Fishing </option>
                        <option value="Mountain Bike" className="bg-gray-300">Mountain Bike</option>
                        <option value="Camping" className="bg-gray-300">Camping</option>
                        <option value="Japan" className="bg-gray-300">Japan Tour</option>
                        <option value="Maldives" className="bg-gray-300"> Maldives Tour</option>
                    </select>
                </div>

                {/* Phone Number Field */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123-456-7890"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Persons</label>
                    <input
                        type="number"
                        id="number"
                        name="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Number Of persons"
                        min="0"
                        required
                        max="50"
                    />
                </div>

                {/* Special Requirements Field */}
                <div className="mb-4">
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">Special Requirements</label>
                    <textarea
                        id="requirements"
                        name="requirements"
                        value={Req}
                        onChange={(e) => setReq(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Let us know if you have any special requests..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={handleSubmit}  >
                        Book Now
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Form;
