import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBP3bJnMXDhVzw3dXksJJ1GfRxDHbxn7aI",
  authDomain: "fir-49a28.firebaseapp.com",
  projectId: "fir-49a28",
  storageBucket: "fir-49a28.appspot.com",
  messagingSenderId: "199120089777",
  appId: "1:199120089777:web:15d461295cd28dc615e890",
  measurementId: "G-030B3RP83Y",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
