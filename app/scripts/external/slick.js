export function slick() { // eslint-disable-line import/prefer-default-export
  $('.edicoes-carousel_content').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    accessiblity: true,
    dots: true,
    dotsClass: 'edicoes-carousel_nav-indicator',
    zIndex: -2,

    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        infinite: true,
      },

    }, {

      breakpoint: 720,
      settings: {
        accessiblity: true,
        slidesToShow: 2,
      },

    }, {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    }],
  });
}
