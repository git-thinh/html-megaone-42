
var countDownDate1 = new Date("April 2, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x1 = setInterval(function () {
    var now1 = new Date().getTime();
    // Find the distance between now and the count down date
    var distance1 = countDownDate1 - now1;

    // Time calculations for days, hours, minutes and seconds
    var newdays = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var newhours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var newminutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var newseconds = Math.floor((distance1 % (1000 * 60)) / 1000);
    if (newdays < 10) {
        $(".timer .days").html("0" + newdays);
    } else {
        $(".timer .days").html(newdays);
    }
    if (newhours < 10) {
        $(".timer .hours").html("0" + newhours);
    } else {
        $(".timer .hours").html(newhours);
    }
    if (newminutes < 10) {
        $(".timer .minutes").html("0" + newminutes);
    } else {
        $(".timer .minutes").html(newminutes);
    }
    if (newseconds < 10) {
        $(".timer .seconds").html("0" + newseconds);
    } else {
        $(".timer .seconds").html(newseconds);
    }


    // If the count down is over, write some text
    if (distance1 < 0) {
        clearInterval(x1);
        document.getElementById("count-down-area").innerHTML = "EXPIRED";
    }
}, 1000);
