
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdZnuJbtc5p8pCaavNsgBlIr18pUmZ9Ig",
  authDomain: "vango-react.firebaseapp.com",
  projectId: "vango-react",
  storageBucket: "vango-react.appspot.com",
  messagingSenderId: "698753101260",
  appId: "1:698753101260:web:09982f195cc44568724169",
  measurementId: "G-WBDKNZ5WEW"
};

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);