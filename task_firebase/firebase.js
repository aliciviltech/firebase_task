
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged   } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDJETOpuniySRwXr4kBB39tK5hyeRZsDI",
    authDomain: "first-project-f5cda.firebaseapp.com",
    projectId: "first-project-f5cda",
    storageBucket: "first-project-f5cda.appspot.com",
    messagingSenderId: "581803347371",
    appId: "1:581803347371:web:849b31ce001387e86ad6ee",
    measurementId: "G-L0081003DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged  , db, collection, addDoc, getDocs, doc, updateDoc }
