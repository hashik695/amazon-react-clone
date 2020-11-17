import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFs166YO7OODn7XT2ll5i9CZCDapm3QBI",
  authDomain: "amzn-react.firebaseapp.com",
  databaseURL: "https://amzn-react.firebaseio.com",
  projectId: "amzn-react",
  storageBucket: "amzn-react.appspot.com",
  messagingSenderId: "997258098120",
  appId: "1:997258098120:web:0f9b8e0aa99e0f7aa4bcfd",
  measurementId: "G-J1R99XJJE4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };