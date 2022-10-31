var langs = {
    en: {
        step1Title: "WARNING!",
        step2Title: "question 1",
        step3Title: "question 2",
        step4Title: "question 3",
        step5Title: "AGE",
        step6Title: "Username",
        step7Title: "Email",
        step8Title: "Password",
        step9Title: "thank you!",
        step1Paragraph: "You will see nude photos. Please be discreet.",
        step2Paragraph: "Many of these women are desperate single moms and cheating wives looking for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of these women a secret?",
        step3Paragraph: "These women have asked us to not allow men that are seeking a \"relationship\". They only desire quick sex. Not dating. Do you agree to this request?",
        step4Paragraph: "Are you at least 25 years old? The women have requested that we not let those younger than 25 contact them because of past rude behavior by younger men.",
        step5Paragraph: "Because you will see explicit images, we need to know that you are over 25.",
        step6Paragraph: "Please enter your username",
        step7Paragraph: "Please enter your e-mail",
        step8Paragraph: "Please enter your password",
        step9Paragraph: "You may now see our list and photos of women who are in your area. Again, please keep their identity a secret. Click on the \"Continue\" button and search on the basis of your answers.",
        btnContinue: "Continue",
        btnYes: "yes",
        btnNo: "no",
        btnNext: "Next",
        btnBack: "Back",
        adult: "adult only",
        validAgeMesReq: "Please enter your age",
        validAgeMesMin: "Your age should be over 25",
        validUserMesReq: "Please provide a username",
        validUserMesMin: "Your username must be at least 3 characters long",
        validUserMesMax: "Your username must be not longer than 20 characters",
        validEmailMesReq: "Please enter a valid email address",
        validPassMesReq: "Please provide a password",
        validPassMesMin: "Your password must be at least 6 characters long",
        validPassMesMax: "Your password must be not longer than 16 characters",
        validPassMesVal: "Your password must be at least 6 characters long and contain numbers",
    },

};
$(document).ready(function() {
    var langBrowser = navigator.language || (navigator.languages && navigator.languages[0])
        , param = langs[langBrowser];
    if (param === undefined && langBrowser && langBrowser.length > 0) {
        var parsedLang = langBrowser.slice(0, 2);
        if (langs[parsedLang]) {
            param = langs[parsedLang];
        }
    }
    if (param === undefined) {
        param = langs["en"];
        $(".step-1 .step__header h1").text(param.step1Title);
        $(".step-1 .step__body p").text(param.step1Paragraph);
        $(".step-2 .step__header h6").text(param.step2Title);
        $(".step-2 .step__body p").text(param.step2Paragraph);
        $(".step-3 .step__header h6").text(param.step3Title);
        $(".step-3 .step__body p").text(param.step3Paragraph);
        $(".step-4 .step__header h6").text(param.step4Title);
        $(".step-4 .step__body p").text(param.step4Paragraph);
        $(".step-5 .step__header h6").text(param.step5Title);
        $(".step-5 .step__body p").text(param.step5Paragraph);
        $(".step-6 .step__header h6").text(param.step6Title);
        $(".step-6 .step__body p").text(param.step6Paragraph);
        $(".step-7 .step__header h6").text(param.step7Title);
        $(".step-7 .step__body p").text(param.step7Paragraph);
        $(".step-8 .step__header h6").text(param.step8Title);
        $(".step-8 .step__body p").text(param.step8Paragraph);
        $(".step-9 .step__header h1").text(param.step9Title);
        $(".step-9 .step__body p").text(param.step9Paragraph);
        $(".btn-continue").text(param.btnContinue);
        $('.btn-back').text(param.btnBack);
        $('.btn-next').text(param.btnNext);
        $(".btn-yes").text(param.btnYes);
        $(".btn-no").text(param.btnNo);
    } else {
        $(".step-1 .step__header h1").text(param.step1Title);
        $(".step-1 .step__body p").text(param.step1Paragraph);
        $(".step-2 .step__header h6").text(param.step2Title);
        $(".step-2 .step__body p").text(param.step2Paragraph);
        $(".step-3 .step__header h6").text(param.step3Title);
        $(".step-3 .step__body p").text(param.step3Paragraph);
        $(".step-4 .step__header h6").text(param.step4Title);
        $(".step-4 .step__body p").text(param.step4Paragraph);
        $(".step-5 .step__header h6").text(param.step5Title);
        $(".step-5 .step__body p").text(param.step5Paragraph);
        $(".step-6 .step__header h6").text(param.step6Title);
        $(".step-6 .step__body p").text(param.step6Paragraph);
        $(".step-7 .step__header h6").text(param.step7Title);
        $(".step-7 .step__body p").text(param.step7Paragraph);
        $(".step-8 .step__header h6").text(param.step8Title);
        $(".step-8 .step__body p").text(param.step8Paragraph);
        $(".step-9 .step__header h1").text(param.step9Title);
        $(".step-9 .step__body p").text(param.step9Paragraph);
        $(".btn-continue").text(param.btnContinue);
        $('.btn-back').text(param.btnBack);
        $('.btn-next').text(param.btnNext);
        $(".btn-yes").text(param.btnYes);
        $(".btn-no").text(param.btnNo);
    }
    (function initStepbox() {
            var $stepBox = $(".stepbox")
                , $stepBoxStep = $stepBox.children(".step");
            $stepBoxStep.find(".next").click(function(e) {
                e.preventDefault();
                changeStep();
            });
            $.validator.addMethod("validPswd", function(value, element) {
                return /[0-9]/.test(value) && /[a-z]/i.test(value);
            }, param.validPassMesVal);
            $.validator.addMethod('validEmail', function(value, element) {
                return /^([a-zA-Z0-9_.+-])+\@(([\.a-zA-Z0-9-])+)+(\.[a-zA-Z0-9]{2,4})+$/.test(value);
            }, param.validEmailMesReq);
            $("#form-age").validate({
                rules: {
                    age: {
                        required: true,
                        min: 25,
                        maxlength: 2
                    }
                },
                messages: {
                    age: {
                        required: param.validAgeMesReq,
                        min: param.validAgeMesMin
                    }
                },
                submitHandler: function(form) {
                    changeStep();
                }
            });
            $("#form-username").validate({
                rules: {
                    username: {
                        required: true,
                        minlength: 3,
                        maxlength: 20
                    }
                },
                messages: {
                    username: {
                        required: param.validUserMesReq,
                        minlength: param.validUserMesMin,
                        maxlength: param.validUserMesMax
                    }
                },
                submitHandler: function(form) {
                    changeStep();
                }
            });
            $("#form-email").validate({
                rules: {
                    email: {
                        required: true,
                        email: true,
                        validEmail: true
                    }
                },
                messages: {
                    email: {
                        required: param.validEmailMesReq
                    }
                },
                submitHandler: function(form) {
                    changeStep();
                }
            });
            $("#form-password").validate({
                rules: {
                    password: {
                        required: true,
                        minlength: 6,
                        maxlength: 16,
                        validPswd: true
                    }
                },
                messages: {
                    password: {
                        required: param.validPassMesReq,
                        minlength: param.validPassMesMin,
                        maxlength: param.validPassMesMax,
                        validPswd: param.validPassMesVal
                    }
                },
                submitHandler: function(form) {
                    changeStep();
                }
            });
            function changeStep() {
                var $currentStep = $stepBoxStep.filter('.current');
                $currentStep.removeClass('current');
                $currentStep.next().addClass('current');
                $('.progress .bar').animate({
                    width: '+=11%'
                });
            }
            function prevStep() {
                var $currentStep = $stepBoxStep.filter('.current');
                $currentStep.removeClass('current');
                $currentStep.prev().addClass('current');
                $('.progress .bar').animate({
                    width: '-=11%'
                });
            }
            $('.btn-back').on('click', function() {
                prevStep();
            });
        }
    )();
});
