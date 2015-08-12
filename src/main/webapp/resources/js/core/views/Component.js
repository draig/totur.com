define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var Component = Backbone.View.extend({

        cfg: {},

        isRender: false,

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

        render: function() {
            this.isRender = true;
            return this;
        },

        disable: function(disabled) {
            this.$field.attr('disabled', disabled ? 'disabled' : null);
        }
    });

    return Component;
});