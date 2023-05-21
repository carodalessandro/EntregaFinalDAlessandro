import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB34RxjRIznfrZ-zE2feWqvaLzZnmsL11s",
  authDomain: "fancy-ecommerce-687bc.firebaseapp.com",
  projectId: "fancy-ecommerce-687bc",
  storageBucket: "fancy-ecommerce-687bc.appspot.com",
  messagingSenderId: "488219544073",
  appId: "1:488219544073:web:34f40eeec982fa148946d8"
};

const app = initializeApp(firebaseConfig);

export const initFirebase= () => app