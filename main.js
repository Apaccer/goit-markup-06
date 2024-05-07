const mobMenu = document.querySelector(".backdrop");
const btnOpen = document.querySelector(".menu-open-btn");
const btnClose = document.querySelector(".close-btn");

btnOpen.addEventListener("click", () => {
  mobMenu.classList.add("is-open");
});
btnClose.addEventListener("click", () => {
  mobMenu.classList.remove("is-open");
});

const menuLink = document.querySelectorAll(".menu-link");
menuLink.forEach((elem) => {
  elem.addEventListener("click", () => {
    mobMenu.classList.remove("is-open");
  });
});
