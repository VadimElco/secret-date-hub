StepControllerView = Backbone.View.extend({
    el: 'body',
    nav_index: 0,
    view_h: null,
    view_w: null,
    events: {
        'click .navbtn': 'step_nav',
        'keyup': 'key_nav'
    },
    initialize: function() {
        this.get_browser_dimensions();
        this.render_modules();
        if (params.theme) {
            $('body').addClass(params.theme);
        }
    },
    get_browser_dimensions: function() {
        this.view_w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.view_h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    render_modules: function() {
        lander.steps = new StepView();
        this.module_setup()
    },
    step_nav: function(direction) {
        var fade_time = config.timers.questions;
        var nav_order = config.step_sequence
            , active_index = this.nav_index
            , next_index = this.nav_index + 1;
        var current_page = nav_order[this.nav_index]
            , next_page = nav_order[next_index];
        $('#' + current_page).animate({
            'opacity': 0
        }, {
            duration: fade_time,
            easing: 'linear',
            complete: function() {
                $(this).css({
                    'display': 'none'
                });
            }
        });
        $('#' + next_page).css({
            'display': 'block'
        }).delay(fade_time).animate({
            'opacity': 1
        }, {
            duration: fade_time,
            easing: 'linear'
        });
        this.activate_module(current_page, next_page);
        this.nav_index++;
    },
    key_nav: function(e) {
        var key = e.keyCode;
        if (key === 27 || key === 13) {
            this.step_nav();
        }
    },
    activate_module: function(active, next) {
        if (next === 'scanner') {
            lander.scanner = new ScannerView();
        }
        if (next === 'load_url') {
            this.goto_url();
        }
        this.set_module_bg(active, next);
    },
    module_setup: function(active) {
        $('#' + config.step_sequence[0]).css({
            'opacity': 1,
            'display': 'block'
        });
        if (config.step_sequence[0] === 'scanner') {
            lander.scanner = new ScannerView();
        }
        if (config.step_sequence[0]) {
            this.set_module_bg(config.step_sequence[0], config.step_sequence[0]);
        }
    },
    set_module_bg: function(active, next) {
        var conf_collection = lander.steps.collection.models;
        var active_view = _.filter(conf_collection, function(arr) {
            if (arr.attributes.settings.id === active) {
                return arr;
            }
        });
        var next_view = _.filter(conf_collection, function(arr) {
            if (arr.attributes.settings.id === next) {
                return arr;
            }
        });
        var active_model = next_view[0].attributes || active_view[0].attributes;
        var active_type = next_view[0].attributes.settings.type || active_view[0].attributes.settings.type;
    },
    set_bgimage: function(img) {
        this.$el.css({
            'background-image': 'url(' + img + '.jpg)',
            'background-color': img
        });
    },
    goto_url: function() {
        redirect2();
    },
    alert: function(module) {
        var confirmer = window.confirm(module.title + ' ' + module.description);
        if (confirmer === true) {
            this.step_nav();
        } else {
            this.step_nav();
        }
    }
});
StepView = Backbone.View.extend({
    hasrun: false,
    initialize: function() {
        this.collection = new Steps(config.steps);
        if (!this.hasrun) {
            this.render();
        }
    },
    render: function() {
        var self = this;
        var module_length = self.collection.length - 1;
        _.each(this.collection.models, function(item) {
            self.render_item(item);
        });
        this.hasrun = true;
    },
    render_item: function(item) {
        var stepItemView = new StepItemView({
            model: item,
            template: item.attributes.settings.type
        });
    }
});
StepItemView = Backbone.View.extend({
    el: 'body',
    container_el: $('#intros'),
    events: {},
    initialize: function(item) {
        this.template = _.template($('#' + item.template + '_template').html());
        this.render(item);
    },
    render: function(item) {
        var module = item.template;
        if (module === 'prompt' || module === 'dialog' || module === 'options') {
            this.container_el = $('#questions');
        } else {
            this.container_el = $('#intros');
        }
        return this.container_el.append(this.template(this.model.toJSON()));
    }
});
ScannerView = Backbone.View.extend({
    el: '.scanner_wrap',
    has_loaded: false,
    initialize: function() {
        this.$el.show();
        _.delay(this.setup_scanner, 40);
        _.delay(this.progress, 300);
    },
    setup_scanner: function() {
        var self = this;
        $('#progressbar').progressbar({
            value: false,
            change: function() {
                $('.progress-label').text($('#progressbar').progressbar('value') + "%");
            },
            complete: function() {
                $('.progress-label').text(params.scan_loaded);
                lander.scanner.progress_completed()
            }
        });
    },
    progress: function() {
        var self = this;
        var timeout = config.timers.scanner;
        var val = $('#progressbar').progressbar('option', 'value') || 0;
        $('#progressbar').progressbar({
            'value': val + 2
        });
        if (val < 99) {
            setTimeout(lander.scanner.progress, timeout);
        }
    },
    progress_completed: function() {
        var self = this;
        _.delay(function() {
            self.$el.hide();
            self.next_step();
        }, 500);
    },
    param_overrides: function() {
        if (params.scan_title != null)
            $('h3', this.$el).text(params.scan_title);
    },
    next_step: function() {
        if (!this.has_loaded) {
            lander.control.step_nav();
            this.has_loaded = true;
        }
    }
});
Step = Backbone.Model.extend({});
Steps = Backbone.Collection.extend({
    model: Step
});
AppRouter = Backbone.Router.extend({
    routes: {
        "": "home"
    },
    initialize: function() {
        lander.control = new StepControllerView();
    },
    home: function() {}
});
$(function() {
    lander.routes = new AppRouter();
    Backbone.history.start();
    $.fn.preload = function() {
        this.each(function() {
            $('<img/>')[0].src = this;
        });
    }
    $(config.backgrounds.preload_list).preload();
});
