import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { userCredential } from "../contexts/userContext";
import Swal from "sweetalert2";
import { updateProfile } from 'firebase/auth';


function Login() {
    const navigate = useNavigate(); 
    // user or updateuser ko hamne context se access keya han
    const { user, updateUser } = useContext(userCredential);

    const { theme } = useContext(ThemeContext);

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // yaha  user ko update kara han context me 
                updateUser({ name: user.displayName || "User", email: user.email });
                console.log("User logged in:", user);
                Swal.fire({
                    title: "User Logged in!",
                    text: "Congrates",
                    icon: "success"
                  });
                Swal.fire( "Welcome")
            
                setEmail("")
                setPassword("")
                navigate(`/`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error logging in:", errorCode, errorMessage);
                Swal.fire(
                    "Incorrect Password or email"
                 
                )
                setPassword("")
                setEmail("")
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
                                name="email"
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
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                            Login
                        </button>

                       <Link to={"/SignUp"}><p className="flex justify-center align-middle mt-1"> Or SignUp</p></Link> 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
