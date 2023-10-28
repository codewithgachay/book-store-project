//ALL IMOPTRED JAVASCRIPT FILES
//EXPORTED FUNCTIONS FROM FIREBASE
import {
  ref,
  set,
  onValue,
  get,
  push,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "./firebase.js";

//EXPORTED FUNCTIONS FROM LIBRARY
import { setAllBooks,returnAllBookH2Element } from "./library.js";

//ALL FUNCTIONS
onValue(ref(db, "/Catalog"),snapshot => {
  setAllBooks(snapshot);
});

//ALL BOOK HTML ELEMENT EVENT









