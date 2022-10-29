$(document).ready(function() {
    $("#press1").click(function(e) {
        e.preventDefault();
        $("#step2").fadeIn("slow");
        $("#step1").hide();
    });
    $("#press2").click(function(e) {
        e.preventDefault();
        $("#step3").fadeIn("slow");
        $("#step2").hide();
    });
    $("#press3").click(function(e) {
        e.preventDefault();
        $("#step4").fadeIn("slow");
        $("#step3").hide();
    });
    $("#press4").click(function(e) {
        e.preventDefault();
        $("#step5").fadeIn("slow");
        $("#step4").hide();
    });
    $("#press5").click(function(e) {
        e.preventDefault();
        $("#step6").fadeIn("slow");
        $("#step5").hide();
    });
    $("#press6").click(function(e) {
        e.preventDefault();
        $("#step7").fadeIn("slow");
        $("#step6").hide();
    });
});