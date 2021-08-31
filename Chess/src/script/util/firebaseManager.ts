// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/functions";
import { firebaseConfig } from "../data/firebaseconfig";

export default class FireBaseManager {
  database: firebase.database.Database;
  Init() {
    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    firebase.functions().useEmulator("localhost", 5001);
    firebase.database().useEmulator("localhost", 9000);
  }

  InitMatchmaking() {
    let ref = this.database.ref("matchmaking");
    ref.on(
      "child_added",
      (a, b) => {
        console.log(a);
        console.log(b);
      },
      (a) => {
        console.log(a);
      }
    );
  }
}
