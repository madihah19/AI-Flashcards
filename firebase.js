// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXAqC0C4H1D-3cE1fIOA_ike_dOYmuhs0",
  authDomain: "flashcardsaas-de0ce.firebaseapp.com",
  projectId: "flashcardsaas-de0ce",
  storageBucket: "flashcardsaas-de0ce.appspot.com",
  messagingSenderId: "675173825294",
  appId: "1:675173825294:web:eed0629c1d5cf3d8d5f55f",
  measurementId: "G-MNTBCGYVM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };