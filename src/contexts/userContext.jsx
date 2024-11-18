import { createContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const userCredential = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const updateUser = (userInfo) => {
    setUser(userInfo);
  };
  

  useEffect(() => {
    const checkingUser = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUser({ uid: currentUser.uid, ...userDoc.data() });
        }
      } else {
        setUser(null);
      }
    });

    return checkingUser;
  }, []);

  return (
    <userCredential.Provider value={{ user, updateUser }}>
      {children}
    </userCredential.Provider>
  );
}

export default UserContextProvider;
