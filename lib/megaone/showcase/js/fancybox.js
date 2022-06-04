/*======================================*/
/*===========Modal window js============*/
/*======================================*/

function next_window(x){
    $.ajax({
        type: "GET",
        url: "portfolio/modal_windows/"+x+".html",
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            //alert(result);
            $("#data-modal").html(result);
        }
    });
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
        $(".loader").fadeOut(800);
    },1000);
    setTimeout(function(){ $("#"+x).addClass("modal-view").fadeIn(800); }, 800);
    setTimeout(function(){ $(".loader").removeClass('load'); }, 800);
}

function prev_window(x){
    $.ajax({
        type: "GET",
        url: "portfolio/modal_windows/"+x+".html",
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            $("#data-modal").html(result);
        }
    });
    $('.body').addClass('body-overlay');
    $(".modal-window").removeClass("modal-view");
    $(".loader").addClass('load');
    setTimeout(function () {
        $(".loader").fadeOut(800);
    },1000);
    setTimeout(function(){ $("#"+x).addClass("modal-view").fadeIn(800); }, 800);
    setTimeout(function(){ $(".loader").removeClass('load'); }, 800);
}

function morphic_window(x) {
    $.ajax({
        type: "GET",
        url: "portfolio/modal_windows/"+x+".html",
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            //alert(result);
            $("#data-modal").html(result);
        }
    });
    openmodal(x);

}
function openmodal(x){


    setTimeout(function(){$('#'+x).addClass("modal-view").fadeIn(800);},50);
    setTimeout(function(){$('body').addClass('show-modal').fadeIn(800);},50);

}


 $('#data-modal').on('click','.close-modal',function(){
     $(".modal-window").removeClass("modal-view");
     $('body').removeClass('show-modal');
     $('.body').removeClass('body-overlay');
 });

$('#data-modal').on('click','.modal-window',function(event){
    var i=event.target.id;
    var x=event.target.className;
    var v=x.split(" ");
    var c=v[0];
    if(c=="modal-window"){

        $(".modal-window").removeClass("modal-view");
        $('.body').removeClass('body-overlay');
        $('body').removeClass('show-modal');

    }
    else{
    }
});


