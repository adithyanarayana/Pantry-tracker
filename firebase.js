// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7mojJmbEHP7uCcNvelIx84gInJ3MP_74",
  authDomain: "inventory-tracker-7011a.firebaseapp.com",
  projectId: "inventory-tracker-7011a",
  storageBucket: "inventory-tracker-7011a.appspot.com",
  messagingSenderId: "451392547282",
  appId: "1:451392547282:web:7caca028fc3ec4ad62400b",
  measurementId: "G-PVEM8NPQBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };