// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdZnuJbtc5p8pCaavNsgBlIr18pUmZ9Ig",
  authDomain: "vango-react.firebaseapp.com",
  projectId: "vango-react",
  storageBucket: "vango-react.appspot.com",
  messagingSenderId: "698753101260",
  appId: "1:698753101260:web:09982f195cc44568724169",
  measurementId: "G-WBDKNZ5WEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//crear instancia

export const db = getFirestore(app);