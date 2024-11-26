import { userCredential } from "../contexts/userContext";
import { useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


function UserIslamicTours() {
    const {theme} = useContext(ThemeContext)
    const { user } = useContext(userCredential); 
    const [tours, setTours] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchUserTours = async () => {
            
            try {
                
                const toursRef = collection(db, "islamicTourPackages");
                const queryForIslamicTour = query(toursRef, where("uid", "==", user.uid)); 
                const querySnapshot = await getDocs(queryForIslamicTour); 

                const fetchedTours = [];
                querySnapshot.forEach((doc) => {
                    fetchedTours.push({ id: doc.id, ...doc.data() }); 
                });

                setTours(fetchedTours);
            } catch (err) {
                console.error("Error fetching user tours:", err);
                setError("Failed to fetch tours"); 
            } finally {
                setLoading(false); 
            }
        };

        fetchUserTours(); 
    }, [user.uid]); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>{error}</div>; 
    }
console.log(tours)
    return (
        <div  className={`min-h-screen w-screen overflow-hidden ${
            theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}>
            <h1 className="flex  text-3xl font-bold " >Islamic  Tours</h1>
            {tours.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-6 p-4">
              {tours.map((tour) => (
                  <div
                      key={tour.id}
                      className="border border-gray-300 shadow-md rounded-lg bg-white w-80 p-4 hover:shadow-lg transition-shadow"
                  >
                      <h2 className="text-lg font-bold text-gray-800 mb-2">Name: {tour.name}</h2>
                      <h3 className="text-base font-semibold text-blue-600">Package: {tour.Package}</h3>
                      <p className="text-sm text-gray-600">Persons: {tour.Persons}</p>
                      <p className="text-sm text-gray-600">Email: {tour.email}</p>
                      <p className="text-sm text-gray-600">Travel Date: {tour.Travel}</p>
                      <p className="text-sm text-gray-600">Phone: {tour.contactNumber}</p>
                      <p className="text-sm font-medium text-gray-800">
                          Pricing: <span className="text-green-600">{tour.packagePricing}</span>
                      </p>
                  </div>
              ))}
          </div>
          
            ) : (
                <div>No tours available.</div> 
            )}
        </div>
    );
}

export default UserIslamicTours;
