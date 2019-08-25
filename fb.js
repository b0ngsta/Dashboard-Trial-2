
import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvCGBjxWBjSCg24ApE-_U7L5eZVy8-6FY",
  authDomain: "unikwon-2a03a.firebaseapp.com",
  databaseURL: "https://unikwon-2a03a.firebaseio.com",
  projectId: "unikwon-2a03a",
  storageBucket: "",
  messagingSenderId: "245610343766",
  appId: "1:245610343766:web:38b63deab7b40e1d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  
  db.settings({ timestampsInSnapshots: true});

  export default db;
