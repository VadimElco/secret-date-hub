!function() {
    var config = {
        redirectUrlClass: 'redirect-url-button',
        captcha: {
            selectors: {
                imagesContainerId: 'custom-captcha-popup-wrap-pic',
                overlayId: 'custom-captcha-popup-overlay',
                lockedClass: 'col-pic-blocked',
                overlayContainerClass: 'col-overlay'
            },
            cssClasses: {
                row: 'row-pic',
                cellContainer: 'col-pic bordered',
                cellContainerLocked: 'col-pic bordered col-pic-blocked',
                image: 'pic',
                overlayContainer: 'col-overlay',
            },
            config: {}
        },
        allCaptchaConfig: [{
            images: ['/1_01.png', '/1_02.png', '/1_03.png', '/1_04.png', '/1_05.png', '/1_06.png', '/1_07.png', '/1_08.png', '/1_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/2_01.png', '/2_02.png', '/2_03.png', '/2_04.png', '/2_05.png', '/2_06.png', '/2_07.png', '/2_08.png', '/2_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/3_01.png', '/3_02.png', '/3_03.png', '/3_04.png', '/3_05.png', '/3_06.png', '/3_07.png', '/3_08.png', '/3_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/4_01.png', '/4_02.png', '/4_03.png', '/4_04.png', '/4_05.png', '/4_06.png', '/4_07.png', '/4_08.png', '/4_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/5_01.png', '/5_02.png', '/5_03.png', '/5_04.png', '/5_05.png', '/5_06.png', '/5_07.png', '/5_08.png', '/5_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/6_01.png', '/6_02.png', '/6_03.png', '/6_04.png', '/6_05.png', '/6_06.png', '/6_07.png', '/6_08.png', '/6_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/7_01.png', '/7_02.png', '/7_03.png', '/7_04.png', '/7_05.png', '/7_06.png', '/7_07.png', '/7_08.png', '/7_09.png', ],
            blockImage: '/blocked-icon.png',
        }, {
            images: ['/8_01.png', '/8_02.png', '/8_03.png', '/8_04.png', '/8_05.png', '/8_06.png', '/8_07.png', '/8_08.png', '/8_09.png', ],
            blockImage: '/blocked-icon.png',
        }],
    };
    var app = {
        initConfig: function() {
            config.captcha.config = config.allCaptchaConfig[Math.floor(Math.random() * config.allCaptchaConfig.length)];
        },
        initCaptchaImages: function() {
            var scriptFolder = $(".img-path")[0];
            scriptFolder = $(scriptFolder).attr("src");
            scriptFolder = scriptFolder.substring(0, scriptFolder.lastIndexOf('/') + 1);
            var blurImageIndexes = [];
            while (blurImageIndexes.length < 2) {
                var r = Math.floor(Math.random() * config.captcha.config.images.length);
                if (blurImageIndexes.indexOf(r) === -1)
                    blurImageIndexes.push(r);
            }
            var imagesContainer = document.getElementById(config.captcha.selectors.imagesContainerId);
            var imageIndex = 0;
            if (config.captcha.config.images.length === 9) {
                for (var i = 0; i < 3; i++) {
                    var row = document.createElement('div');
                    row.className = config.captcha.cssClasses.row;
                    for (var k = 0; k < 3; k++) {
                        var cellContainer = document.createElement('div');
                        cellContainer.className = config.captcha.cssClasses.cellContainer;
                        var image = document.createElement('img');
                        image.className = config.captcha.cssClasses.image;
                        image.src = scriptFolder + config.captcha.config.images[imageIndex];
                        cellContainer.appendChild(image);
                        if (blurImageIndexes.indexOf(imageIndex) >= 0) {
                            var overlayContainer = document.createElement('div');
                            overlayContainer.className = config.captcha.cssClasses.overlayContainer;
                            var overlayImage = document.createElement('img')
                            overlayImage.src = scriptFolder + config.captcha.config.blockImage;
                            overlayContainer.appendChild(overlayImage);
                            var overlayText = document.createElement("p");
                            overlayText.textContent = 'Click to unlock';
                            overlayContainer.appendChild(overlayText);
                            cellContainer.className = config.captcha.cssClasses.cellContainerLocked;
                            cellContainer.appendChild(overlayContainer);
                        }
                        row.appendChild(cellContainer);
                        imageIndex++;
                    }
                    imagesContainer.appendChild(row);
                }
            } else {
                console.log('Init custom captcha error. Wrong count images for captcha.');
            }
            app.addListenerClickCaptchaImage();
        },
        initShowCaptcha: function() {
            $(document).on('customCaptchaShow', function(e) {
                $('#' + config.captcha.selectors.overlayId + ', #' + config.captcha.selectors.imagesContainerId).show();
            });
            var interval = setInterval(function() {
                if ($('.redirect-url-button').is(":visible")) {
                    clearInterval(interval);
                    $(document).trigger('customCaptchaShow');
                }
            }, 200);
        },
        addListenerClickCaptchaImage: function() {
            $('#' + config.captcha.selectors.imagesContainerId + ' .' + config.captcha.selectors.lockedClass).on('click', function() {
                app.processClickCaptchaImage(this);
            });
        },
        processClickCaptchaImage: function(el) {
            var $el = $(el);
            $el.removeClass(config.captcha.selectors.lockedClass);
            $el.find('.' + config.captcha.selectors.overlayContainerClass).remove();
            if ($('.' + config.captcha.selectors.lockedClass).length === 0) {
                setTimeout(function() {
                    $('#' + config.captcha.selectors.overlayId + ', #' + config.captcha.selectors.imagesContainerId).hide();
                    app.processSuccessCaptcha();
                }, 1000);
            }
        },
        processSuccessCaptcha: function() {},
        getRedirectUrl: function() {
            var config = app.getRedirectUrlPartsConfig();
            return config['s'] + '://' + (config['h'].replace(/\/$/g, '')) + '/' + (config['p'].replace(/^\//g, '')) + '?' + config['q'];
        },
        getRedirectUrlPartsConfig: function() {
            if (typeof _rup !== 'undefined') {
                return _rup;
            } else {
                return null;
            }
        },
        init: function() {
            var redirectUrlPartsConfig = app.getRedirectUrlPartsConfig();
            if (redirectUrlPartsConfig) {
                app.initConfig();
                app.initCaptchaImages();
                app.initShowCaptcha();
            } else {
                console.log('Init custom captcha error. Redirect URL not found.');
            }
        }
    };
    document.addEventListener('DOMContentLoaded', function(event) {
        app.init();
    })
}();
