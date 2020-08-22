
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('dx-nav-active');
        } else {
            currentvalue = document.getElementById("dx_onOff").value;
            if (currentvalue == "open") {
            $('.navbar').addClass('dx-nav-active'); } else {
                $('.navbar').removeClass('dx-nav-active');
        }}
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

  function flipper(x) {
    x.classList.toggle("flipper");
  }

  function dx_toggler(x) {
    flipper(x);
    currentvalue = document.getElementById("dx_onOff").value;
    if (currentvalue == "open") {
    document.getElementById("dx_onOff").value = "undefined";
    } else {
        document.getElementById("dx_onOff").value = "open"; 
    }
    dx_bridge();
  }

 function dx_bridge() {
     currentvalue = document.getElementById("dx_onOff").value;
     if (currentvalue == "open") {
        $('.navbar').addClass('dx-nav-active');
     } else {
        if ( $(window).scrollTop () > 0 ) {
        $('.navbar').addClass('dx-nav-active');
     } else {
        $('.navbar').removeClass('dx-nav-active');
        }}

  }