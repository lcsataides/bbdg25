import {} from './external/jquery';
import {} from 'foundation-sites'; // eslint-disable-line import/imports-first
import {} from 'slick-carousel'; // eslint-disable-line import/imports-first
import { slick } from './external/slick';
import {} from 'jquery-ui-dist/jquery-ui'; // eslint-disable-line import/imports-first
// import {} from 'onepage-scroll/jquery.onepage-scroll';

$(document).foundation();
slick();

$('.welcome-img').draggable({
  axis: 'x',
});

$('.goto-site').click(() => {
  $('.welcome').addClass('scroll-enable');
});

// $('.welcome-onepage').onepage_scroll({
//   sectionContainer: '.welcome-section',
//   easing: 'ease',
//   animationTime: 1000,
//   pagination: false,
//   updateURL: false,
//   loop: false,
//   keyboard: true,
//   responsiveFallback: false,
//   direction: 'vertical',
// });

