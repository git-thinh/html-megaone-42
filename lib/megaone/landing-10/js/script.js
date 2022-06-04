
if ($(".count_down").length) {
    $('.count_down').downCount({
        date: '6/30/2020 12:00:00',
        offset: +10
    });
}


// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

