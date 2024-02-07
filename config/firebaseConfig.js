
import { initializeApp } from "firebase/app";
import {getAuth, } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjanqtEKHrmld6g8UZ42gxZpHhZBc79z8",
  authDomain: "rnfirebase-2efda.firebaseapp.com",
  projectId: "rnfirebase-2efda",
  storageBucket: "rnfirebase-2efda.appspot.com",
  messagingSenderId: "773474384679",
  appId: "1:773474384679:web:94870065e8a117f478c702"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
