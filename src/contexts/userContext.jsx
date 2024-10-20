import { createContext, useState } from "react";



// Create the user context
export const userCredential = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Initial state

  // Function to update user
  const updateUser = (userInfo) => {
    setUser(userInfo);
  };


  return (
    <userCredential.Provider value={{ user, updateUser }}>
      {children}
    </userCredential.Provider>
  );
}

export default UserContextProvider;
