
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('dx-nav-active');
        } else {
            $('.navbar').removeClass('dx-nav-active');
        }
    });
  });

  
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 300 ) {
            document.getElementById("scrollTop").style.opacity = "1";
        } else {
            document.getElementById("scrollTop").style.opacity = "0";
        }
    });
  });