    // noinspection JSCheckFunctionSignatures
    $("#press1").click(function(e) {
    e.preventDefault();
    $("#p2").fadeIn();
    $("#p1").hide();
});
    $("#press2").click(function(e) {
    e.preventDefault();
    $("#p3").fadeIn();
    $("#p2").hide();
});
    $("#press3").click(function(e) {
    e.preventDefault();
    $("#p4").fadeIn();
    $("#p3").hide();
});
    $("#press4").click(function(e) {
    e.preventDefault();
    $("#p4").fadeIn();
    $("#p3").hide();
});
    $("#press5").click(function(e) {
    e.preventDefault();
    $("#p5").fadeIn();
    $("#p4").hide();
});
    $("#press6").click(function(e) {
    e.preventDefault();
    $("#p5").fadeIn();
    $("#p4").hide();
});
    $("#press7").click(function(e) {
    e.preventDefault();
    $("#p6").fadeIn();
    $("#p5").hide();
});
    $("#press8").click(function(e) {
    e.preventDefault();
    $("#p6").fadeIn();
    $("#p5").hide();
});
    $("#press9").click(function(e) {
    e.preventDefault();
    $("#p7").fadeIn();
    $("#p6").hide();
});
    $("#press10").click(function(e) {
    e.preventDefault();
    $("#p7").fadeIn();
    $("#p6").hide();
});
    $("#press11").click(function(e) {
    e.preventDefault();
    $("#p8").fadeIn();
    $("#p7").hide();
});
    $("#press12").click(function(e) {
    e.preventDefault();
    $("#p9").fadeIn();
    $("#p8").hide();
});
    $("#press13").click(function(e) {
    e.preventDefault();
    $("#p10").fadeIn();
    $("#p9").hide();
});
    $("#press14").click(function(e) {
    e.preventDefault();
    $("#p11").fadeIn();
    $("#p10").hide();
});
    setTimeout(function() {
    $("html, body").animate({
    scrollTop: $(document).height()
}, 1700);
}, 1500);