// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBe0JlhV45KFtQRHcY72fEEKTYGv2PCGUY",
  authDomain: "tayitupro.firebaseapp.com",
  projectId: "tayitupro",
  storageBucket: "tayitupro.appspot.com",
  messagingSenderId: "544287191073",
  appId: "1:544287191073:web:e044c151e6f91fc1d9b360",
  measurementId: "G-13K79QH7KZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
