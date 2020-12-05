import firebase from "firebase/app";
import "firebase/firestore";
import config from "./config.js";

export default firebase.initializeApp(config).firestore();