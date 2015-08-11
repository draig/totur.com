define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/Component'
], function($, _, Backbone, Component){

    var Dialog = Component.extend({

        template: _.template(
                '<div class="dialog">'+
                    '<div class="header">' +
                        '<div class="title"><%= title %></div>' +
                        '<% if(helpUrl) {%> <div class="help"><img href="help.png"></div> <% } %>' +
                    '</div>' +
                    '<div class="body"></div>' +
                    '<div class="footer"></div>' +
                '</div>'),

        initialize: function(option) {
            this.cfg.title = option.title || '';
            this.cfg.helpUrl = option.helpUrl || '';
        },

        render: function(){
            this.$el = $(this.template(this.cfg));
            return Component.prototype.render.apply(this, arguments);
        },

        appendTo: function(node) {
            //do nothing
        },

        prependTo: function(node) {
            //do nothing
        }
    });

    return Dialog;
});