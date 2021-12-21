let modalBtn = document.querySelector(".modal-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");
let modalCloseBg = document.querySelector(".modal-bg");
let toggleNav = document.querySelector(".menu-btn");
let toggleNavStatus = false;

toggleNav.addEventListener("click", function () {
  let getSidebar = document.querySelector(".nav");
  let getSidebarUl = document.querySelector(".nav ul");
  let getSidebarLinks = document.querySelectorAll(".nav a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";

      toggleNavStatus = true;
    }
  } else if (toggleNavStatus === true) {
    getSidebar.style.width = "50px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";

      getSidebarUl.style.visibility = "hidden";

      toggleNavStatus = false;
    }
  }
});

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

modalCloseBg.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});
