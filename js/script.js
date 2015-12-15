(function ($, root, undefined) {$(function () {'use strict'; // on ready start
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////
//        general
///////////////////////////////////////

  // css tricks snippet - http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

///////////////////////////////////////////////////////////////////////////////
});})(jQuery, this); // on ready end