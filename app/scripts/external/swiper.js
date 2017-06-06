let edicoesCarousel = new Swiper('.carousel-container', { // eslint-disable-line
  slidesPerView: 4,
  slidesPerGroup: 4,
  paginationClickable: true,
  pagination: '.edicoes-carousel_nav-indicator',
  wrapperClass: 'edicoes-carousel_content',
  nextButton: '.edicoes-carousel_nav-foward',
  prevButton: '.edicoes-carousel_nav-backward',
  breakpoints: {
    1040: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
