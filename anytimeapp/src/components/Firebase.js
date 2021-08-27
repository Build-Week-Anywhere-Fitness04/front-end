import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';


const app = firebase.initializeApp({
  apiKey: "AIzaSyAD4gmdGy-4Q6rXopZof82RAJ6lsJyV_iM",

  authDomain: "anytimefitness-e873d.firebaseapp.com",

  projectId: "anytimefitness-e873d",

  storageBucket: "anytimefitness-e873d.appspot.com",

  messagingSenderId: "434349541037",

  appId: "1:434349541037:web:dafdc2e6412bbb7eeae824",

  measurementId: "G-2S3N7SBTQN",
});

export const auth = app.auth(); // authentication object and methods
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // creates an instance of the google auth provider object that can be used to log in 
export const db = firebase.firestore(); // firestore collection object and methods - text data access
export const storage = firebase.storage(); // storage access for file upload data


export default app;
