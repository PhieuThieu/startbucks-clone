import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3DunrsUE9mEDV1bJvjrkfd5bUoZ31JYo",
  authDomain: "starbucks-clone-yiu.firebaseapp.com",
  projectId: "starbucks-clone-yiu",
  storageBucket: "starbucks-clone-yiu.appspot.com",
  messagingSenderId: "1094278221481",
  appId: "1:1094278221481:web:1eb935d17a0b03212ea3b8"
};

const firebaseApp = initializeApp(firebaseConfig)

export  const auth = getAuth(firebaseApp)