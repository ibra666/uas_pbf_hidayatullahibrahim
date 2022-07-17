import { getApps, getApp, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbtG01lmKqtqftVKRgjKXxhucdtPGL64o",
  authDomain: "restaurant-uas.firebaseapp.com",
  databaseURL: "https://restaurant-uas-default-rtdb.firebaseio.com",
  projectId: "restaurant-uas",
  storageBucket: "restaurant-uas.appspot.com",
  messagingSenderId: "280587533159",
  appId: "1:280587533159:web:e9fc340c0e9692894d0dc2",
  measurementId: "G-0MEXQEWNDQ"
};

const app =getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, db, firestore, storage };