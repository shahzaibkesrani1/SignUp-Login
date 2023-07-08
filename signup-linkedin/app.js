import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB00JohWr2-q5riS09Y8LasIOOFNePH6nA",
  authDomain: "signup2-8b066.firebaseapp.com",
  projectId: "signup2-8b066",
  storageBucket: "signup2-8b066.appspot.com",
  messagingSenderId: "181042274979",
  appId: "1:181042274979:web:d54c09e7ea4039227e9516",
  measurementId: "G-VLPBQDP6SZ",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      document.body.classList.remove("signup_active");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  const email = document.getElementById("email1").value;
  const password = document.getElementById("password1").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Please Enter Correct Email / Password");
    });
});

const loginContainer = document.querySelector(".c-form__wrapper--login");
const signupContainer = document.querySelector(".c-form__wrapper--signup");

loginContainer.addEventListener("click", function () {
  if (document.body.classList.contains("signup_active")) {
    document.body.classList.remove("signup_active");
  }
});
signupContainer.addEventListener("click", function () {
  if (!document.body.classList.contains("signup_active")) {
    document.body.classList.add("signup_active");
  }
});

const passwordInputs = document.querySelectorAll(
  '.c-form__input[type="password"]'
);
const showHides = document.querySelectorAll(".c-form__input-show");

for (let i = 0; i < showHides.length; i++) {
  showHides[i].addEventListener("click", function () {
    if (passwordInputs[i].getAttribute("type") === "password") {
      passwordInputs[i].setAttribute("type", "text");
      showHides[i].innerHTML = "Hide";
    } else {
      passwordInputs[i].setAttribute("type", "password");
      showHides[i].innerHTML = "Show";
    }
  });
}
