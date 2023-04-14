import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB1wsqf2P7vARMa1oUV15yOvw_l3mJCYkI",
  authDomain: "react-app-tour-travel.firebaseapp.com",
  projectId: "react-app-tour-travel",
  storageBucket: "react-app-tour-travel.appspot.com",
  messagingSenderId: "3499539463",
  appId: "1:3499539463:web:00590fe1d32e7d5d35bea2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app);
export {
    db,
    auth,
    storage
}