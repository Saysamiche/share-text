"use strict";

const exchangeText = function () {
  if (document.querySelector("#hello").textContent === "HELLO WORLD") {
    document.querySelector("#new").textContent = "HELLO WORLD";
  }
};
document.querySelector("#hello").addEventListener("click", exchangeText);
