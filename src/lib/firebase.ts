import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGu-Wqr11S1K87Doia5p4xAlKdvtUMtzA",
  authDomain: "brightcorner-150c6.firebaseapp.com",
  projectId: "brightcorner-150c6",
  storageBucket: "brightcorner-150c6.firebasestorage.app",
  messagingSenderId: "447695196075",
  appId: "1:447695196075:web:bf6666bbb87d35d5910cee",
  measurementId: "G-D1CEBQ2SP1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);