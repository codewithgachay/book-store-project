//ALL IMOPTRED JAVASCRIPT FILES

import {
    ref,
    set,
    onValue,
    get,
    push
  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

  import { db } from "./firebase.js";
  //SWIPER
  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }

  //VARIABLES
  let sold =0;
  let allBooks =[];
 

  //DOM ELEMENTS
  let newReleases;


