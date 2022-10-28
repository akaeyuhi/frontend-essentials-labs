"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const formOutput = document.querySelector(".form__result");
  const validator = new Validator(form, formOutput);
});
