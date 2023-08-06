import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC0Ek8nOnc3xfGBPPISDjVjtNnPGKtGR6M",
  authDomain: "proyecto-react-7c670.firebaseapp.com",
  projectId: "proyecto-react-7c670",
  storageBucket: "proyecto-react-7c670.appspot.com",
  messagingSenderId: "94706192704",
  appId: "1:94706192704:web:e180ffdfb6bc597eb92aa5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)