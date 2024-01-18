import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU0OFMQTOL0kYFSOXwHgdqWfsIOY0clgI",
  authDomain: "clerk-c0f17.firebaseapp.com",
  projectId: "clerk-c0f17",
  storageBucket: "clerk-c0f17.appspot.com",
  messagingSenderId: "806529948609",
  appId: "1:806529948609:web:48f41a1d598e1abf7ded40",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
