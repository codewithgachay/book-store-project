//ALL IMOPTRED JAVASCRIPT FILES

import {
  ref,
  set,
  onValue,
  get,
  push,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

import { db } from "./firebase.js";

//Variables
let swiperWrapper = document.createElement("swiper-wrapper");
let allBooks =[];
//functions

onValue(ref(db, "/Catalog"), function (snapshot) {
  const arr = snapshot.val();

  for (let index in arr) {
    let bookObj = arr[index];
    console.log(bookObj.imgUrl)
    for (const [key, value] of Object.entries(bookObj)) {
      const div = document.createElement("div");
      div.classList.add("swiper-slide ");
      div.innerHTML = `<div class="card" style="width: 18rem">
   <img
     class="card-img-top"
     src="${bookObj.imgUrl}"
     alt="Card image cap"
   />
   <div class="card-body">
     <h5 class="card-title">${bookObj.name}</h5>
     <p class="card-text">${bookObj.author}</p>
     <a href="#" class="btn btn-primary" id ="${index}">READ MORE</a>
   </div>`;
   let a = swiperWrapper.append(div);
   }
   
}});



