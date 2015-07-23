TotuRex.core.cmp.Component = TotuRex.define(Object, {

    id: '',
    $el: null,
    cssClass: 'cmp',
    cmpId: '',
    tmpl: '<div></div>',

    __listeners: {},

    constructor: function(config) {
        this.cfg = config;

        if (config.listeners) {
            $.each(config.listeners, function(key, value) {
                if (key !== 'scope') {
                    this.addListener(key, value, config.listeners.scope || this);
                }
            });
        }

        $.extend(this, config);

        this.buildComponent();


    },

    buildComponent: function() {
        if (!this.$el) {
            this.$el = $(this.tmpl);
        }
        if (this.id) {
            this.$el.attr('id', this.id);
        }
        if (this.cssClass) {
            this.$el.addClass(this.cssClass);
        }

    },

    addEventListner: function(event, handler, scope) {
        this.__listeners[event] = this.__listeners[event] || [];
        if (typeof handler ==='function'){
            this.__listeners[event].push(handler.bind(scope || this));
        }
    },

    publish: function(event) {
        var i, listeners;
        if(this.__listeners[event]){

            var params = [];
            for (i = 1; i < arguments.length; i++) {
                params[i - 1] = arguments[i];
            }

            listeners = this._listeners[event].slice();
            listeners.forEach(function(func) {
                func.apply(window, arguments);
            });
        }
    },

    placeAt: function (parentCmp, position) {
        var $container;
        if (parentCmp) {
            if (typeof parentCmp === 'string') {
                $container = $(parentCmp);
            } else {
                $container = parentCmp.$container || parentCmp.$el || parentCmp;
            }
            position = position || 'append'
            $container[position](this.$el);
        }
    }

});