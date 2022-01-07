import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBRtggQYKFwZUHu-xPYdEb--wxhaukcufI",
  authDomain: "tweeter-clone-d9aa5.firebaseapp.com",
  projectId: "tweeter-clone-d9aa5",
  storageBucket: "tweeter-clone-d9aa5.appspot.com",
  messagingSenderId: "71986153463",
  appId: "1:71986153463:web:72f66a3fd4fe8bc0bed0f2",
  measurementId: "G-79LFL8L5M7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;