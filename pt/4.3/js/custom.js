$(document).ready(function() {
    setTimeout("$('#preloader').fadeOut(100);$('.wrapper').fadeIn(300)", 4000);
    var background = document.getElementsByTagName('body')
    $('.btn').click(function() {
        $(this).parent().hide().next().fadeIn();
        scrollPage(500);
    });
    $('#btn1').click(function() {
        $(this).parent().hide();
        $('.first').show();
        move();
        setTimeout("$('.first').hide();$('.second').show();", 1000);
        setTimeout("$('.second').hide();$('.third').show();", 2000);
        setTimeout("$('.third').hide();$('.fourth').show();", 3000);
        setTimeout("$('.fourth').hide();$('.fifth').show();", 4000);
        setTimeout("$('.fifth').hide();$('#myProgress').hide();$('.sixth').show();", 5000);
        setTimeout("$('.sixth').hide();$('.finaltxt').show();", 6000);
        setTimeout("$('.finaltxt').hide();$('#final').fadeIn();", 7000);
    })
    $('.cta').click(function() {
        $(this).parent().hide();
        $('#mailing').fadeIn();
        scrollPage(500);
    });
    $(".answer").click(function() {
        $(this).toggleClass("selected");
    });
});
function scrollPage(speed) {
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, speed);
    }, 3000);
}
var images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"]
var i = 0;
setInterval(function() {
    body.style.backgroundImage = "url(" + images[i] + ")";
    body.style.backgroundImage = "transition: all 3000ms ease 0s;";
    i = i + 1;
    if (i === images.length) {
        i = 0;
    }
}, 3000);
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
