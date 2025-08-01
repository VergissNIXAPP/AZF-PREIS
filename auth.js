import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

window.login = async function() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Erfolgreich eingeloggt!");
    window.location.href = "dashboard.html";
  } catch (e) {
    alert("Login fehlgeschlagen: " + e.message);
  }
};
