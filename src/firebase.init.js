// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFCAo-lZQqUGGzqdWf5j6SmSmSLm41omk",
    authDomain: "router-firebase-integrat-a95f3.firebaseapp.com",
    projectId: "router-firebase-integrat-a95f3",
    storageBucket: "router-firebase-integrat-a95f3.appspot.com",
    messagingSenderId: "596836951859",
    appId: "1:596836951859:web:997d7692892e897c68c046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app