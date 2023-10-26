//ALL IMOPTRED JAVASCRIPT FILES

import {
    ref,
    set,
    onValue,
    get,
    push
  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

  import { db } from "./firebase.js";

  //VARIABLES
  let sold =0;
  let allBooks =[];
 

  //DOM ELEMENTS
  let newReleases;


