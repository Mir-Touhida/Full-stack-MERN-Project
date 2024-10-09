// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY8doPIq4VXP4h4hovKFc7dKsU3BqbVcA",
  authDomain: "assignment-4-firebase-auth.firebaseapp.com",
  projectId: "assignment-4-firebase-auth",
  storageBucket: "assignment-4-firebase-auth.appspot.com",
  messagingSenderId: "329651959621",
  appId: "1:329651959621:web:d18c87585ae5d72ac3b02c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
