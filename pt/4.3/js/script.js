$(document).ready(function() {
    function scroll() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500);
    }
    setTimeout(scroll, 2500);
    $('.btn').not('#start, .btn-prev').on('click', function() {
        $('.step:visible').hide().next().fadeIn();
        scroll();
    });
    $('.btn-prev').on('click', function() {
        $('.step:visible').hide().prev().fadeIn();
        scroll();
    });
    $('.options .option').on('click', function() {
        $(this).toggleClass('selected');
    });
    var $slides = $('.girl-item');
    var maxIndex = $slides.length - 1;
    var i = 0;
    function changeSlide() {
        if (i < maxIndex) {
            i++;
        } else {
            i = 0;
        }
        $('.girl-item').removeClass('active');
        $slides.eq(i).addClass('active');
    }
    setInterval(changeSlide, 3000);
});
