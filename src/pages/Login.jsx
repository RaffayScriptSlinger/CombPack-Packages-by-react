import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { userCredential } from "../contexts/userContext";
import Swal from "sweetalert2";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

function Login() {
    const navigate = useNavigate();
    const { updateUser } = useContext(userCredential);
    const { theme } = useContext(ThemeContext);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} =>`, doc.data());
                });
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);




    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateUser({ name: user.displayName || "User", email: user.email });
                console.log("User logged in:", user);

                Swal.fire({
                    title: "Login Successful!",
                    text: "Welcome!",
                    icon: "success"
                });

                setEmail("");
                setPassword("");
                navigate(`/`);
            })
            .catch((error) => {
                console.log("Error logging in:", error.code, error.message);
                Swal.fire("Error", "Incorrect email or password", "error");
                setEmail("");
                setPassword("");
            });
    };

    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-blue-500"}`}>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Login
                        </button>
                        <p className="flex justify-center align-middle mt-1"> Don't have an account? <Link to="/SignUp" className="font-semibold">Sign Up Here </Link></p>
                       
                        <p className="flex justify-center align-middle mt-1">Back to <Link to="/" className="font-semibold mx-1">Home</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
