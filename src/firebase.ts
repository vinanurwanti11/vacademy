// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyBP_1svh1CvOlcZUcpEezTLdJEYZLElFKk",
  authDomain: "v-academy-b5759.firebaseapp.com",
  databaseURL: "https://v-academy-b5759-default-rtdb.firebaseio.com/",
  projectId: "v-academy-b5759",
  storageBucket: "v-academy-b5759.appspot.com",
  messagingSenderId: "942842565276",
  appId: "1:942842565276:web:6d4396e2ed59d078165359",
  measurementId: "G-XFQD3YGBX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { authFirebase, db, messaging }