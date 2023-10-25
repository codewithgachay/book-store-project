import {
  ref,
  set,
  onValue,
  get,
  push
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "./firebase.js";
var joinUs = document.querySelector(".join-us");
var userIcon = document.querySelector(".user-icon");
var popUp = document.querySelector("#popup");
var closePopUp = function () {
  popUp.classList.remove("popup");
  popUp.classList.add("close-popup");
}
var openPopUp = function () {
  popUp.classList.remove("close-popup");
  popUp.classList.add("popup");
}
joinUs.addEventListener("click", function() {
   return openPopUp();
});
var closePopup = document.querySelector("#popup img");
closePopup.addEventListener("click", function(){
   return closePopUp();
});
userIcon.addEventListener("click", function() {
    return openPopUp();
});

const register = document.querySelector(".register");
const form = document.querySelector(".register form");
const h2 = document.querySelector(".register h2");
const submit = document.querySelector(".submit");
const errorP = document.createElement("p");
form.append(errorP);
// const joinUs = document.getElementById("a.join-us");
const joinUsBtn = document.querySelector(".user-icon")
var registerForm = {
  userName: "",
password: "",
validateInputs: function(x, y) {
  if (!x.value.trim()) {
  errorP.innerHTML = "Please fill in all fields!";
  errorP.classList.add("error-text");
  x.classList.add("error-input");
  console.log("sehv");
  } else if (!y.value.trim()) {
    errorP.innerHTML = "Please fill in all fields!";
    errorP.classList.add("error-text");
    x.classList.remove("error-input");
    y.classList.add("error-input");
    console.log(y);
    } else if (x.value.split(" ").length==1) {
  errorP.innerHTML = "Please write your full name(name & surname)";
  y.classList.remove("error-input");
  errorP.classList.add("error-text");
  x.classList.add("error-input");
  }
   else {
  form.innerText = "";
  register.classList.add("success-register");
  h2.innerText = "Thank you for joining us!";
  h2.classList.add("success-join");
  x.classList.remove("error-input");
  y.classList.remove("error-input");
  setTimeout(closePopUp, 3000);
  this.userName = x.value;
  this.email = y.value;
  const userData = {
    userName: this.userName,
    email: this.email
    };
   const snapshotKey = push(ref(db, "/userData")).key;
   set(ref(db, "/userData/" + snapshotKey), userData);
  //  joinUs.innerHTML= ""
  //  const fName = document.createElement("p");
  //  fName.innerHTML = this.userName;
  //  joinUs.append("fName");
   }
}}
form.addEventListener("submit", function(e){
  e.preventDefault();
  var f = e.target;
 registerForm.validateInputs(f.fname, f.email );
})



