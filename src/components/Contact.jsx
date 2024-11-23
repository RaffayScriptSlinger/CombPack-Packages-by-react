import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState, useEffect } from "react";
import { userCredential } from "../contexts/userContext";
import Swal from "sweetalert2";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Contact() {
  const { user } = useContext(userCredential);
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name || "")
      setEmail(user.email || "");
    }
  }, [user]);

  const handleBtn = async () => {
    if (!message) {
      Swal.fire("Kindly fill all fields");
      return;
    }

    if (!email) {
      Swal.fire("Login First Your Email is Required");
      navigate("/SignUp")
      return;
    }

    Swal.fire({
      title: 'We Got Your Message!',
      text: 'Thank you for reaching out! Our team will get back to you as soon as possible.',
      icon: 'success',
      confirmButtonText: 'Great!'
  });
  
    try {

      await addDoc(collection(db, "contacts"), {
        email: email,
        message: message,
      });


      setMessage("");

    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire("Error!", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.446659558966!2d67.06559967443043!3d24.882741644367403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbb0adad14f%3A0xd4034f7f251f28e5!2sSaylani%20job%20bank!5e0!3m2!1sen!2s!4v1728546574600!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Your feedback fuels our improvement and drives us toward excellence.
            </p>
            <div className="relative mb-4">
              <label htmlFor="Fname" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="Fname"
                name="Fname"
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-200 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                value={name}

              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email" z
                name="email"
                value={email}
                readOnly
                className="w-full bg-gray-200 rounded border border-gray-300 text-gray-500 py-1 px-3"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleBtn}>
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">Note: Your response is recorded</p>
            <p className="text-xs text-gray-500 mt-3">Have any questions? Visit our
              
              <Link to="/Faqs" className="font-bold ml-1">
              FAQs!
              </Link>
               </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
