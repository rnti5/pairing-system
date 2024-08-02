import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6_C_i_NBC9ln6QNgrFZlPpiuOaos6XfM",
  authDomain: "pair-77d18.firebaseapp.com",
  projectId: "pair-77d18",
  storageBucket: "pair-77d18.appspot.com",
  messagingSenderId: "235555484683",
  appId: "1:235555484683:web:e027758a9107e247b7c30e",
  measurementId: "G-LRSTNET60K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
