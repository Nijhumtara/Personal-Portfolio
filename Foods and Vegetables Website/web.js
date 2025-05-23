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

document.getElementById("homescroll").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("Categoriescroll").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("catagories").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("productscroll").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("aboutscroll").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("customerscroll").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("customer").scrollIntoView({ behavior: "smooth" });
});


