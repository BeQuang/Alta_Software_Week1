// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41HA8PuCSmeHg56-oLOF2qGTnpMY2Ugo",
  authDomain: "hotel-dashboard-eea30.firebaseapp.com",
  projectId: "hotel-dashboard-eea30",
  storageBucket: "hotel-dashboard-eea30.firebasestorage.app",
  messagingSenderId: "1065968499665",
  appId: "1:1065968499665:web:c9c505f115df119f35bef0",
  measurementId: "G-P6T11LZCBX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
