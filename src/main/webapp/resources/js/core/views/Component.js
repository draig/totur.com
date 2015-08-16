define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var Component = Backbone.View.extend({

        cfg: null,

        isRender: false,

        lazyRender: false,

        initialize: function(options) {
            Backbone.View.prototype.initialize.apply(this, arguments);
            this.cfg = options || {};
            this.lazyRender = !!this.cfg.lazyRender;
        },

        render: function() {
            this.isRender = true;
            return this;
        },

        autoRender: function() {
            if(!this.lazyRender) {
                this.render.apply(this, arguments);
            }
        },

        appendTo: function(node) {
            this.$el.appendTo(node);
        },

        prependTo: function(node) {
            this.$el.prependTo(node);
        },

        show: function() {
            this.$el.show();
        },

        hide: function() {
            this.$el.hide()
        },

        disable: function(disabled) {
            this.$field.attr('disabled', disabled ? 'disabled' : null);
        }
    });

    return Component;
});