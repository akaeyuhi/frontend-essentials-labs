"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const rootElement = document.querySelector(".result__container");
  const loaderElement = document.querySelector(".loader__container");
  new DataLoader(rootElement, loaderElement);
});
