// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjCTNP8FwfepgRYa85l6K9BSZO5uISKxc",
  authDomain: "sportify-99713.firebaseapp.com",
  projectId: "sportify-99713",
  storageBucket: "sportify-99713.appspot.com",
  messagingSenderId: "1056150962448",
  appId: "1:1056150962448:web:8365ccdf5e460c41692595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
