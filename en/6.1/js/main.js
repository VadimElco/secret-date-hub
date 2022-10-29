$(document).ready(function() {
    function e() {
        $("html, body").animate({
            scrollTop: $(document).height()
        }, 1500)
    }

    function t() {
        $(".slider-item.active").removeClass("active").next().addClass("active")
        $(".slider-item.preload").next().addClass("preload")
    }
    setTimeout(e, 2500);
    var i = 0
        , s = $(".step-item");
    s.length;
    $(".step-btn").not(".submit-btn").on("click", function() {
        i++
        $(".step-block").removeClass("first-step")
        $(".step-item:visible").hide().next().fadeIn()
        e()
        i < 3 ? t() : 6 === i ? t() : 10 === i && t()
    })
    $(".checkbox-item").on("click", function() {
        $(this).toggleClass("checked tr-selected")
    })
});