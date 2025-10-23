var swiper = new Swiper(".ho-me",{
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  console.log(navbar);
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
  console.log(navbar);
}
