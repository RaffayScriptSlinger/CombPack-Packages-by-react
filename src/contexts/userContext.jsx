import { createContext, useState } from "react";
import {db}  from '../utils/firebase';
import  { collection, addDoc } from "firebase/firestore";




// Create the user context
export const userCredential = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initial state

  // Function to update user
  const updateUser = (userInfo) => {
    setUser(userInfo);
  };
  try {
    const docRef =  addDoc(collection(db, "users"), {
      
      email : user.email,
     


    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


  return (
    <userCredential.Provider value={{ user, updateUser }}>
      {children}
    </userCredential.Provider>
  );
}

export default UserContextProvider;
