"use strict";

const rezultat = document.querySelector(".rezultat");
let facturaInput = Number(document.querySelector(".factura").value);
const facturaBtn = document.querySelector(".verifica");
const procentBtn = document.querySelector(".calculator");
let procentInput = Number(document.querySelector(".procent").value);
const refresh = document.querySelector(".refresh");
const dinNouEvent = function () {
  rezultat.textContent = "Aflati-va Bacsisul";
  document.querySelector(".factura").value = "";
  document.querySelector(".procent").value = "";
};
const factura = function () {
  facturaInput = Number(document.querySelector(".factura").value);
  if (!facturaInput) {
    rezultat.textContent = "😥Introduce-ti un numar mai mare decat 0";
  } else if (facturaInput < 0) {
    rezultat.textContent = "😔Introduce-ti un alt procent";
  } else if (facturaInput > 0) {
    rezultat.textContent = `😊Inroduce-ti procentul `;
  }
};

const procent = function () {
  facturaInput = Number(document.querySelector(".factura").value);
  factura();

  procentInput = Number(document.querySelector(".procent").value);

  const calcBacsis = function () {
    return (facturaInput * procentInput) / 100;
  };

  if (!procentInput) {
    factura();
    rezultat.textContent = "😥Introduce-ti un numar mai mare decat 0";
  } else if (procentInput < 0) {
    rezultat.textContent = "😔Introduce-ti un alt procent";
  } else if (procentInput > 200) {
    rezultat.textContent = `Procent prea mare`;
  } else if (procentInput > 0) {
    rezultat.textContent = `Aveti un Bacsis de:${calcBacsis()} LEI`;
    console.log(calcBacsis());
  }
};
facturaBtn.addEventListener("click", factura);
procentBtn.addEventListener("click", procent);

refresh.addEventListener("click", dinNouEvent);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    dinNouEvent();
  }
});
