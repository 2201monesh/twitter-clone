import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYkKYEyRpekVwLMY1ZdiV6qHk9zRPIkEE",
  authDomain: "twitter-clone-a3ccd.firebaseapp.com",
  projectId: "twitter-clone-a3ccd",
  storageBucket: "twitter-clone-a3ccd.appspot.com",
  messagingSenderId: "410964192363",
  appId: "1:410964192363:web:11978d582cc725486f152e",
  measurementId: "G-8XJ5YGFLJE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;