/**
 * Created by FAVOUR on 1/17/2017.
 */


$(document).ready(function(){


    $(".oriscroll").click(function(){
        oriscroll(this);
    });



    $(document).ready(function(){
        // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
    });


    $(".button-collapse").sideNav();






});

function oriscroll(e) {
    $('html, body').animate({scrollTop: $("#" + $(e).attr('oriscroll')).offset().top-78}, 600);
}

