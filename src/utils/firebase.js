
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBMq3CF3IM8Gctx_Wrbw4U66E4jCmWxkcs",
  authDomain: "combpack-packages.firebaseapp.com",
  projectId: "combpack-packages",
  storageBucket: "combpack-packages.appspot.com",
  messagingSenderId: "789154514625",
  appId: "1:789154514625:web:b7316c486d137bd990b640",
  measurementId: "G-35C2LLEVEZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);



export{
    app,
    auth,
    analytics,
    db
}