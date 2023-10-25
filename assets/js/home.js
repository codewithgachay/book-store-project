import {
  ref,
  set,
  onValue,
  get,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { db } from "./firebase.js";

function setData(data) {
  const where = ref(db, "?");
  set(where, data);
}

function readValue() {
  const where = ref(db, "?");
  get(where).then(function (snapshot) {
    const branchValue = snapshot.val();
  });
}

const readLiveValue = onValue(ref(db, "?"), (snapshot) => {
  const value = snapshot.val();
});