"use strict";

const sharebtn = document.querySelector(".card__share");

const shareSection = document.querySelector(".share-section");

sharebtn.addEventListener("click", function () {
  shareSection.classList.toggle("shown");
});

document.addEventListener("click", function (e) {
  if (!sharebtn.contains(e.target)) {
    console.log("indide");
    shareSection.classList.remove("shown");
  }
});
