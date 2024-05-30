// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyC3tzSLRFkbKCaDSBLFQegKi8aWZFcijEk",
  authDomain: "vacademy-d9ad7.firebaseapp.com",
  projectId: "vacademy-d9ad7",
  storageBucket: "vacademy-d9ad7.appspot.com",
  messagingSenderId: "387842638307",
  appId: "1:387842638307:web:6066a1d009155b0675a0d6",
  measurementId: "G-526TLHWBZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { authFirebase, db, messaging }