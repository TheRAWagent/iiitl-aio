import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "iiitl-aio.firebaseapp.com",
  projectId: "iiitl-aio",
  storageBucket: "iiitl-aio.appspot.com",
  messagingSenderId: "131101832811",
  appId: "1:131101832811:web:fee0f970fcd56a8b19e32e",
  measurementId: "G-DGQM2HQEJP"
};


export const app = initializeApp(firebaseConfig);
