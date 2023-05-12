// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcEMejtJx5zL962K6Hxb40LC5dIahAXuc",
  authDomain: "marllo-project.firebaseapp.com",
  projectId: "marllo-project",
  storageBucket: "marllo-project.appspot.com",
  messagingSenderId: "46695284766",
  appId: "1:46695284766:web:e4c3ccb4a404ad11e76e0f",
  measurementId: "G-XTLWF1LJVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);