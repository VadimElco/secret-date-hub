    $(document).ready(function() {

    $("#press1").click(function(e) {
        e.preventDefault();
        $("#step2").fadeIn();
        $("#step1").hide();
    });

    $("#press2, #press3").click(function(e) {
    e.preventDefault();
    $("#step3").fadeIn();
    $("#step2").hide();
});

    $("#press4, #press5, #press6, #press7, #press8").click(function(e) {
    e.preventDefault();
    $("#step4").fadeIn();
    $("#step3").hide();
});

    $("#press9, #press10, #press11, #press12, #press13, #press14").click(function(e) {
    e.preventDefault();
    $("#step5").fadeIn();
    $("#step4").hide();
});

    $("#press15, #press16, #press17, #press18, #press19, #press20, #press21").click(function(e) {
    e.preventDefault();
    $("#step6").fadeIn();
    $("#step5").hide();
});

    $("#press22, #press23, #press24, #press25, #press26, #press27").click(function(e) {
    e.preventDefault();
    $("#step7").fadeIn();
    $("#step6").hide();
});

    $("#press28, #press29, #press30, #press31").click(function(e) {
    e.preventDefault();
    $("#step8").fadeIn();
    $("#step7").hide();
});

    $("#press32, #press33, #press34, #press35, #press36").click(function(e) {
    e.preventDefault();
    $("#step9").fadeIn();
    $("#step8").hide();
});

    $("#press37, #press38, #press39, #press40, #press41, #press42, #press43, #press44, #press45").click(function(e) {
    e.preventDefault();
    $("#step2").fadeIn();
    $("#step1").hide();
});



});