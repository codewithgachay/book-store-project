
vCARD-SLIDER
ar joinUs = document.querySelector(".join-us");
var userIcon = document.querySelector(".user-icon");
var popUp = document.querySelector("#popup");
joinUs.addEventListener("click", function() {
    popUp.classList.remove("close-popup");
  popUp.classList.add("popup");
});
var closePopUp = document.querySelector("#popup img");
closePopUp.addEventListener("click", function(){
    popUp.classList.remove("popup");
    popUp.classList.add("close-popup");
});
userIcon.addEventListener("click", function() {
    popUp.classList.remove("close-popup");
  popUp.classList.add("popup");
});
