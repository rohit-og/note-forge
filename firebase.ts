import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBB1_JzeKLCn9Z0g6LnRCQ5z3Em910wfIQ",
    authDomain: "note-forge-1505c.firebaseapp.com",
    projectId: "note-forge-1505c",
    storageBucket: "note-forge-1505c.firebasestorage.app",
    messagingSenderId: "839415845666",
    appId: "1:839415845666:web:b4f086050d946025564b7b"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};