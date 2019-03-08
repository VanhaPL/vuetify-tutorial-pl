import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCpegGBz0e0cjLqdSDFlUpwSM6QdKxggD0",
  authDomain: "todo-ninja-6b73c.firebaseapp.com",
  databaseURL: "https://todo-ninja-6b73c.firebaseio.com",
  projectId: "todo-ninja-6b73c",
  storageBucket: "todo-ninja-6b73c.appspot.com",
  messagingSenderId: "239974131557"
};
firebase.initializeApp(config);

const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default db;
