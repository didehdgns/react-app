import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD4jOroZl9FpC12kE0vAL3jObGElU7JoFk",
  authDomain: "game-app-9c71b.firebaseapp.com",
  databaseURL: "https://game-app-9c71b.firebaseio.com",
  projectId: "game-app-9c71b",
  storageBucket: "game-app-9c71b.appspot.com",
  messagingSenderId: "372071630187",
  appId: "1:372071630187:web:0a886587c8407d5b74382e",
  measurementId: "G-LB49WHW1R6",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
