window.onload = function rubik() {
    langcheck();
    var intelligence = localStorage.getItem("boomer");
        if (intelligence == "true")
        {
            on();
        } else {

        }
}

function on() {
    document.getElementById("switch").innerHTML = "Daxici | New Method of Calling a Taxi";
    document.getElementById("switch-img").src = "./assets/materials/lang-switcher/tr_TR.png";
    document.getElementById("anasayfa").innerHTML = "Homepage";
    document.getElementById("ozellikler").innerHTML = "Properties";
    document.getElementById("gorseller").innerHTML = "Gallery";
    document.getElementById("hatabildir").innerHTML = "Bug <span class='en-prefix-report' style='color: #fff; font-weight: 400;'>Report</span>";
    $('.extended').removeClass('report');
    $('.extended').addClass('report-en');
    document.getElementById("h1-baslik").innerHTML = "Daxici is now at Your Service!";
    document.getElementById("p-icerik").innerHTML = "Meet the <span style='font-weight: 500; color: #fbbb12;'>new method</span> of calling a fast and easy taxi!<br><br>We are a mobile application where you can call a taxi from your smartphone<br/> <span style='font-weight: 500; color: #818181;'>wherever you want, whenever you want</span>, and plan future journeys!<br/>";
    document.getElementById("indir").innerHTML = "DOWNLOAD NOW";
    document.getElementById("asagi-k").innerHTML = "Scroll Down";
    document.getElementById("uyg-ozel").innerHTML = "App Properties";
    document.getElementById("yazi-1").innerHTML = "Daxici is gives you about the <br/> your travel time details.";
    document.getElementById("yazi-2").innerHTML = "Daxici, license plate assigned to <br/>your driver, some information such as <br/>  scoring presents you.";
    document.getElementById("yazi-3").innerHTML = "Daxici, also after the ride to indicate<br/> your satisfaction provides an <br/>  opportunity.";
    document.getElementById("yazi-4").innerHTML = "Daxici informs you <br/> about current offers in the field<br/>  of travel.";
    document.getElementById("yazi-5").innerHTML = "Your journey thanks to Daxici <br/>becomes more comfortable and<br/> affordable.";
    document.getElementById("yazi-6").innerHTML = "With Daxici, the possibilities are not <br/>limited bigger vehicles, more people.";
    document.getElementById("h4-baslik").innerHTML = "In App Images";
    // DESKTOP | CAROUSEL SWITCHER
    document.getElementById("1").src = "./assets/materials/screen/en_GB/dx_loc.png";
    document.getElementById("2").src = "./assets/materials/screen/en_GB/dx_choose.png";
    document.getElementById("3").src = "./assets/materials/screen/en_GB/dx_menu.png";
    document.getElementById("4").src = "./assets/materials/screen/en_GB/dx_accept.png";
    document.getElementById("5").src = "./assets/materials/screen/en_GB/dx_over.png";
    document.getElementById("6").src = "./assets/materials/screen/en_GB/dx_plan.png";
    document.getElementById("7").src = "./assets/materials/screen/en_GB/dx_review.png";
    document.getElementById("8").src = "./assets/materials/screen/en_GB/dx_started.png";
    // MOBILE | CAROUSEL SWITCHER
    document.getElementById("9").src = "./assets/materials/screen/en_GB/dx_loc.png";
    document.getElementById("10").src = "./assets/materials/screen/en_GB/dx_choose.png";
    document.getElementById("11").src = "./assets/materials/screen/en_GB/dx_menu.png";
    document.getElementById("12").src = "./assets/materials/screen/en_GB/dx_accept.png";
    document.getElementById("13").src = "./assets/materials/screen/en_GB/dx_over.png";
    document.getElementById("14").src = "./assets/materials/screen/en_GB/dx_plan.png";
    document.getElementById("15").src = "./assets/materials/screen/en_GB/dx_review.png";
    document.getElementById("16").src = "./assets/materials/screen/en_GB/dx_started.png";
    document.getElementById("f1").innerHTML = "Your taxi is ready at anytime, anywhere!";
    document.getElementById("f2").innerHTML = "Call your taxi with one-click and start your journey.<br/>We wish a good and safe journey!";
    document.getElementById("f3").innerHTML = "Is a <span style='color: #FF4848; font-weight: 700;'>bug</span> with the application?";
    document.getElementById("f4").innerHTML = "You can share details to us by e-mail by clicking the button on the side.<br/>Please do not forget to leave an image for details when reporting the bug.";
    document.getElementById("f5").innerHTML = "REPORT US NOW";  
    localStorage.setItem('boomer', "true");
}


function off() {
    location.reload();
    localStorage.setItem('boomer', "false");
}

function swibtn() {
    currentvalue = document.getElementById("swi").value;
    if (currentvalue == "undefined") {
        document.getElementById("swi").value = "on";
    } else {
        document.getElementById("swi").value = "off";
    } if (currentvalue == "off") {
        document.getElementById("swi").value = "on";
    }
    switcher();
}

function switcher() {
    currentvalue = document.getElementById("swi").value;
    if (currentvalue == "on") {
        on();
    } else {
        off();
    }
}

function langcheck() {
    var intelligence = localStorage.getItem("boomer");
        if (intelligence == "true") {
            document.getElementById("swi").value = "on";
        } else {

        }
}
