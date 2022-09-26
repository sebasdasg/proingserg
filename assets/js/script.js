let navbar = document.querySelector(".header .navbar");
let contacInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#info-btn").onclick = () => {
  contacInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contacInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  contacInfo.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".images-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
