import { userCredential } from "../contexts/userContext";
import { useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import UserIslamicTours from "./userIslamicTours";
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';


function UserTours() {
    const { theme } = useContext(ThemeContext)
    const { user } = useContext(userCredential);
    const [tours, setTours] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserTours = async () => {
            
            try {
                
                const toursRef = collection(db, "Tour");
                const q = query(toursRef, where("uid", "==", user.uid)); 
                const querySnapshot = await getDocs(q); 

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

    console.log(tours)

    if (loading) {
        return (
        <div className="w-full h-full">
            <Flex align="center" gap="middle" className="flex justify-center items-center ">
                <Spin
                    indicator={
                        <LoadingOutlined
                            style={{
                                fontSize: 88,
                            }}
                            spin
                        />
                    }
                />
            </Flex>
        </div>
        )

      
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div
            className={` overflow-x-hidden ${theme === "light" ? "bg-white text-black" : "bg-black text-white"
                }`}
        >
            <h1 className=" text-3xl font-bold py-4">
                Your Tours
            </h1>
            {tours.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-6 p-4">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="border border-gray-300 shadow-md rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-80 p-4 hover:shadow-lg transition-shadow"
                        >
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {tour.Package}
                            </h2>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Email:</strong> {tour.email}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Travel Date:</strong> {tour.travelDate}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Phone:</strong> {tour.Phone}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Persons:</strong> {tour.number}
                            </p>

                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                <strong>Package Pricing:</strong>{" "}
                                <span className="text-green-600 dark:text-green-400">
                                    {tour.packagePricing}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg font-medium">No tours available.</p>
                </div>
            )}
            <UserIslamicTours />
        </div>

    );
}

export default UserTours;