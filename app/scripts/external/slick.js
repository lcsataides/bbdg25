$('.edicoes-carousel_content').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  // dots: true,
  // pagination: false,
  // dotsClass: 'edicoes-carousel_nav-indicator',
  accessiblity: true,
  zIndex: -1,

  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      infinite: true,
    },

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      dots: true,
    },

  }, {
    breakpoint: 300,
    settings: 'unslick',
  }],
});
