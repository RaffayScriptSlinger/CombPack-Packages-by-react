import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userCredential } from "../contexts/userContext";

function SignUp() {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const { updateUser } = useContext(userCredential);

    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !name) {
            Swal.fire("Please Fill All Fields");
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                await updateProfile(user, { displayName: name });
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    createdAt: new Date(),
                    uid: user.uid
                });

                
                updateUser({ name: user.displayName, email: user.email });

                Swal.fire("Welcome!", `User created with email: ${user.email}`, "success");
                navigate(`/`);
            } catch (error) {
                console.log("Error signing up:", error.code, error.message);
                Swal.fire("Error", error.message, "error");
            }
        }
    };

    return (
        <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-blue-500"}`}>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
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
                            Sign Up
                        </button>
                        <p className="flex justify-center align-middle mt-1">Already have an account? <Link to="/login">Login Here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
