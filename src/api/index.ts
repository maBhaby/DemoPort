// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LC5h6IQH5ldBSEwHE-fbdL8rP-jrJRI",
  authDomain: "demoport-89d0e.firebaseapp.com",
  projectId: "demoport-89d0e",
  storageBucket: "demoport-89d0e.appspot.com",
  messagingSenderId: "435120430817",
  appId: "1:435120430817:web:b4850bf6278f3f9741a1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);