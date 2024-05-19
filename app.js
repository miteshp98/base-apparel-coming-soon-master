"use strict";

const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit-btn");
const errorImage = document.querySelector(".error-img");
const errorMsg = document.querySelector(".error-msg");
const modal = document.querySelector(".thankyou-modal");
const clodeModal = document.querySelector(".close-modal");

function isValidEmail() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let checkValidEmail = regex.test(emailInput.value);

  if (!checkValidEmail) {
    errorImage.classList.add("visible");
    errorMsg.classList.add("visible");
    emailInput.style.borderColor = "hsl(0, 93%, 68%)";
  } else {
    errorImage.classList.remove("visible");
    errorMsg.classList.remove("visible");
    emailInput.style.borderColor = "hsla(0, 36%, 70%, 0.468)";
    emailInput.value = "";
    modal.classList.remove("hidden");
  }
}

submitBtn.addEventListener("click", function (e) {
  isValidEmail();
  e.preventDefault();
});

clodeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});
