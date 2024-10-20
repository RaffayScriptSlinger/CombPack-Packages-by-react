import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userCredential } from "../contexts/userContext";
import { updateProfile } from 'firebase/auth';


function SignUp() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { updateUser } = useContext(userCredential); // Access updateUser from the context
  
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password || !name) {
      Swal.fire("Please Fill All Fields");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name
          })
          
          // Update the user context with the new user data
          updateUser({ name: user.displayName , email: user.email });

          console.log("User signed up:", user);

          Swal.fire("Welcome!", `User created with email: ${user.email}`, "success");
          navigate(`/`);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Error signing up:", errorCode, errorMessage);
          Swal.fire("Error", errorMessage, "error");
        });
    }
  };

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-blue-500"}`}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Signup
            </button>
            <p className="flex justify-center align-middle mt-1"> Already have a account?  <Link to="/login">  Login Here</Link></p>
            <p className="flex justify-center align-middle mt-1">   <Link to="/">Guest Account</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
