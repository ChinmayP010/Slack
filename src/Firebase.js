import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZu1CReqzl7hIgx63Kl527AqCZViPr60I",
  authDomain: "slack-1b923.firebaseapp.com",
  projectId: "slack-1b923",
  storageBucket: "slack-1b923.appspot.com",
  messagingSenderId: "607620128625",
  appId: "1:607620128625:web:84345276b791bb578520d0",
  measurementId: "G-GT1FF5B6K6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;