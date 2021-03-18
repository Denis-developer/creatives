/* global $ */
/* eslint func-names: ["error", "never"] */
$('.anchor').on('click', function (event) {
  event.preventDefault();
  let id = $(this).attr('href');
  let top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 800);
});
