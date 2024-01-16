// Swiper
const swiper = new Swiper('.mainSlide', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const swiperProducts = new Swiper('.productSlide', {
  slidesPerView: 5,
  spaceBetween: 22,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
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