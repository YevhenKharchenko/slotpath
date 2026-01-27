import Swiper from 'swiper';
import 'swiper/css/bundle';

let interactionSwiper;

interactionSwiper = new Swiper('.interaction-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      centeredSlides: false,
      initialSlide: 0,
      allowTouchMove: false,
      grabCursor: false,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.interaction-swiper-container')
        .classList.add('show');
    },
  },
});
