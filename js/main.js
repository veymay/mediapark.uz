// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// Sticky Header
const header = document.querySelector('.main_bar')
headerOffset = header.offsetTop
window.addEventListener('scroll', () => {
  if ((window.pageYOffset) - 100 > headerOffset) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
})