(function($) {
        $.fn.showHide = function(options) {
            var defaults = {
                speed: 1000,
                easing: '',
                changeText: 1,
                showText: 'Show',
                hideText: 'Hide'
            };
            var options = $.extend(defaults, options);
            $(this).click(function() {
                $('.toggleDiv').fadeOut(options.speed, options.easing);
                var toggleClick = $(this);
                var toggleDiv = $(this).attr('rel');
                changeBg(toggleDiv);
                $(toggleDiv).fadeIn(options.speed, options.easing, function() {
                    if (options.changeText == 1) {
                        $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                    }
                });
                return false;
            });
        }
        ;
    }
)(jQuery);
function changeBg(toggleDiv) {
    if (toggleDiv === "#q0") {
        $('body').css({
            "background": "url(" + $('.bg4').attr('src') + "",
            " background-repeat": "no-repeat",
            "background-size": "cover",
            "backgrosrcund-attachment": "fixed",
            "background-position": "center top"
        });
        $('.layer').css({
            "background": "none"
        });
    } else if (toggleDiv === "#q1" || toggleDiv === "#q2" || toggleDiv === "#q3" || toggleDiv === "#q4") {
        $('body').css({
            "background": "url(" + $('.bg4').attr('src') + "",
            " background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
            "background-position": "center center"
        });
        $('.layer').css({
            "background": "none"
        });
    } else if (toggleDiv === "#q5" || toggleDiv === "#q6" || toggleDiv === "#q7" || toggleDiv === "#q8") {
        $('body').css({
            "background": "url(" + $('.bg5').attr('src') + "",
            " background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
            "background-position": "center center"
        });
        $('.layer').css({
            "background": "none"
        });
    } else if (toggleDiv === "#q9") {
        $('body').css({
            "background": "url(" + $('.bg6').attr('src') + "",
            " background-repeat": "no-repeat",
            "background-size": "cover",
            "background-attachment": "fixed",
            "background-position": "center center"
        });
        $('.layer').css({
            "background": "none"
        });
    }
}
