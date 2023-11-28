import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "uowa-ad445.firebaseapp.com",
  projectId: "uowa-ad445",
  storageBucket: "uowa-ad445.appspot.com",
  messagingSenderId: "868051500111",
  appId: "1:868051500111:web:2a78ae6b80f7c646b4be3a",
  measurementId: "G-D2TXS14B4G"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);