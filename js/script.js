// Mobile Menu Function
$(function() {
  var pull        = $('#menu-open'),
  menu        = $('#mobile-nav #menu'),
  button      = $('#mobile-nav #menu a'),
  shut        = $('#menu-close'),
  menuHeight  = menu.height();

  $(pull).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(shut).on('click', function(e) {
    e.preventDefault();
    menu.slideUp();
  });
});

// fades title on scroll function
$(window).scroll(function(){
  $(".page-head").css("opacity", 1 - $(window).scrollTop() / 250);
});

// silder plugin init
$(document).ready(function(){
  $('.bxslider').bxSlider();
});