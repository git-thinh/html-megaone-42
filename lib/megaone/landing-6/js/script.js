//************************COUNTDOWN START*************************
if ($(".count_down").length) {
    $('.count_down').downCount({
        date: '03/30/2020 12:00:00',
        offset: +10
    });
}

// *******************CAROUSAL********************
$('#carouselFade').carousel({
        interval: 2500,
    });