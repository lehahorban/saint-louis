const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  // Responsive breakpoints
  // breakpoints: {
  //   710: {
  //     slidesPerView: 2,
  //   },
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Додаємо обробник події resize
window.addEventListener("resize", () => {
  swiper.update();
});
