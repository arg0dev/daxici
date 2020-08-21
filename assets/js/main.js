
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('dx-nav-active');
        } else {
            $('.navbar').removeClass('dx-nav-active');
        }
    });
  });