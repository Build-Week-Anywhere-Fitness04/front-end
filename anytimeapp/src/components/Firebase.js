import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAD4gmdGy-4Q6rXopZof82RAJ6lsJyV_iM",

  authDomain: "anytimefitness-e873d.firebaseapp.com",

  projectId: "anytimefitness-e873d",

  // storageBucket: "anytimefitness-e873d.appspot.com",

  // messagingSenderId: "434349541037",

  appId: "1:434349541037:web:dafdc2e6412bbb7eeae824",

  measurementId: "G-2S3N7SBTQN",
});

export const auth = app.auth();
export default app;
