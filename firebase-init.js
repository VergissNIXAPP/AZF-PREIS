// Firebase initialisieren
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_g3neWMNY7HmrJiBOT3zz3-8O_oaV0J0",
  authDomain: "azf-preisschild-generator.firebaseapp.com",
  projectId: "azf-preisschild-generator",
  storageBucket: "azf-preisschild-generator.appspot.com",
  messagingSenderId: "493278417099",
  appId: "1:493278417099:web:0dc8e28bd49bc8da494b4e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
