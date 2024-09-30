
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-vite-c6eb6.firebaseapp.com",
  projectId: "react-vite-c6eb6",
  storageBucket: "react-vite-c6eb6.appspot.com",
  messagingSenderId: "244051005294",
  appId: "1:244051005294:web:23b49b8dda7582f577fb7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);