import { createContext, useState } from "react";




export const userCredential = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); 


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
