// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmDGINrr_YlvN7GBiaS254rHpF6C5G0EU",
  authDomain: "career-counselling-6c868.firebaseapp.com",
  projectId: "career-counselling-6c868",
  storageBucket: "career-counselling-6c868.appspot.com",
  messagingSenderId: "444237262480",
  appId: "1:444237262480:web:db07242be058ed0113b215",
  measurementId: "G-L4P2YE06PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
const db = getFirestore(app);
export{app,auth,db,analytics};