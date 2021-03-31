import firebase from "firebase";
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYKJAbqAow4P-4hIHRJ3CQLfWYHrLyy-4",
  authDomain: "zonghong-facebook.firebaseapp.com",
  projectId: "zonghong-facebook",
  storageBucket: "zonghong-facebook.appspot.com",
  messagingSenderId: "176348365422",
  appId: "1:176348365422:web:316e6babb6389e8d28dc7f",
  measurementId: "G-ZECYNR9VDC",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
