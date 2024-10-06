
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
import { userCredential } from "../contexts/userContext";
import Swal from "sweetalert2";

function Contact(){


  //Funtionality yaha se shuru han yaha se
  const {user} = useContext(userCredential);
 if(user){
  console.log(user.email)
 }else{
  console.log("User is Not Logged In")
 }


  // Theme Context Functionality yaha Hogee
  const handleBtn = () =>{
    console.log( email.value)
    console.log(Fname.value)
    console.log(message.value)
    Swal.fire(`${Fname.value} Your Response is recorded` )
    email.value = ""
    message.value = ""
    Fname.value = ""
  }

  const { theme } = useContext(ThemeContext);
    return(
        <div className={`${theme == "light" ? "bg-white text-black" : "bg-black text-white"}  `}>
            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.714187017561!2d67.1923829744302!3d24.873609444733066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb330ab709e955d%3A0x7d25bf05ef70a106!2sDistrict%20and%20Sessions%20Courts%20Malir%20Karachi!5e0!3m2!1sen!2s!4v1728034974714!5m2!1sen!2s"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      />
      
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
          Visit Malir Court for a vibrant blend of community, culture, and convenience.
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">raffaysharjeel@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">03337761340</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
      Your feedback fuels our improvement and drives us toward excellence.


      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="Fname"
          name="Fname"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          email
          
        </label>
        <input
          type="email"
          id="email"
          name="email"
          // Ager Yaha user Logged in ho to us ke email ajaye Warna empty rahe
          
          value={ user ?user.email : user}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
     
        />
        
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleBtn}>
        Button
      </button>
      <p className="text-xs text-gray-500 mt-3">
        Note: Your Response is recorded 
      </p>
    </div>
  </div>
</section>


        </div>
    )
}
export default Contact