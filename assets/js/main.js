
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

  $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 1770 ) {
            document.getElementById("js-clr").style.color = "#fff";
        } else {
            document.getElementById("js-clr").style.color = "#000";
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

  $(document).ready(function(){
    $('.arg0_swiper').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
    });
    $('#arg0_swiper--prev').on('click', function() {
      $('.arg0_swiper').slick('slickPrev');
    });
    $('#arg0_swiper--next').on('click', function() {
      $('.arg0_swiper').slick('slickNext');
    });
  });

  //smoothScroll-Es5.js #START

  "use strict";
window.addEventListener("load",function()
{
	function scrollIt(destination, duration, easing) 
	{
	if(destination==null)
	{
		console.log("scroll destination: "+destination);
		return;
	}
	  var easings = {
		"linear":function(t) {
		  return t;
		},
		"smooth":function(t) {
		  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		}
	  };

	  var start = window.pageYOffset;
	  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

	  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

	  if ('requestAnimationFrame' in window === false) 
	  {
		window.scroll(0, destinationOffsetToScroll);
		return;
	  }
	  
	  function scroll() 
	  {
		var now = 'now' in window.performance ? performance.now() : new Date().getTime();
		var time = Math.min(1, ((now - startTime) / duration));
		var timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

		if (Math.abs(window.pageYOffset- destinationOffsetToScroll)<1) {
		  return;
		}
		requestAnimationFrame(scroll);
	  }
	  scroll();
	}

	var all_scroll_on_click_elements=document.getElementsByClassName("scrollOnClick");
	if(all_scroll_on_click_elements.length!=0)
	{
		for(var i=0;i<all_scroll_on_click_elements.length;i++)
		all_scroll_on_click_elements[i].addEventListener('click', 
		function(e)  
		{
			var d=e.currentTarget;
			var duration=d.getAttribute("duration");
			if(duration=="" || duration==null) duration=500;
			duration=parseInt(duration);
			var easing=d.getAttribute("easing");
			if(easing=="" || easing==null) easing="smooth";
			var id=d.getAttribute("scrollTo");
			scrollIt(
				document.getElementById(id),
				duration,
				easing
			  );
		});
	}else{
		console.log("WARNING: No elements with class scrollOnClick found.");
	}
});

//smoothScroll-Es5.js #END