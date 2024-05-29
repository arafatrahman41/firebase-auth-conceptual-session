// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuihz5FzIXn4HCQcamfezBjz5WUqtC3GE",
  authDomain: "fir-auth-74e9d.firebaseapp.com",
  projectId: "fir-auth-74e9d",
  storageBucket: "fir-auth-74e9d.appspot.com",
  messagingSenderId: "1054867598561",
  appId: "1:1054867598561:web:7f5db88ae10aedde00dba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)