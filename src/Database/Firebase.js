import * as firebase from "firebase/app";
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyCJbR1gM4tyvfS6V9LRyzp6Zk4zKjhHz54",
    authDomain: "iot-stuff-8c853.firebaseapp.com",
    databaseURL: "https://iot-stuff-8c853.firebaseio.com",
    projectId: "iot-stuff-8c853",
    storageBucket: "iot-stuff-8c853.appspot.com",
    messagingSenderId: "87270960150",
    appId: "1:87270960150:web:60fb7e8fe50716a62d5937",
    measurementId: "G-KMTN6E7GPN"
  };


  firebase.initializeApp(firebaseConfig);
  let databaseRef = firebase.database().ref();
  export default databaseRef;