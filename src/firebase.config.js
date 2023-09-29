// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRbxPjpO675Dj6zeW4_fr34So7mjC2ais",
    authDomain: "module-51-fc1c2.firebaseapp.com",
    projectId: "module-51-fc1c2",
    storageBucket: "module-51-fc1c2.appspot.com",
    messagingSenderId: "903052870597",
    appId: "1:903052870597:web:8241776ea201b7bc9301ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;