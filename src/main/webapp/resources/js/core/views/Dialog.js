define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/Component'
], function($, _, Backbone, Component){

    var Dialog = Component.extend({

        lazyRender: true,

        template: _.template(
                '<div class="modal" style="display: block;">' +
                    '<div class="dialog">' +
                        '<div class="header">' +
                            '<h4 class="title"><%= title %></h4>' +
                            '<% if(helpUrl) {%> <div class="help"><img href="help.png"></div> <% } %>' +
                        '</div>' +
                        '<div class="body"></div>' +
                        '<div class="footer"></div>' +
                    '</div>' +
                '</div>'),

        bodyTemplate: _.template(''),

        initialize: function(option) {
            Component.prototype.initialize.apply(this, arguments);
            this.cfg.title = this.cfg.title || '';
            this.cfg.helpUrl = this.cfg.helpUrl || '';
            this.initBody(option);
        },

        render: function(){
            this.$el = $(this.template(this.cfg));
            this.renderBody();
            this.hide();
            $('body').append(this.$el);
            return Component.prototype.render.apply(this, arguments);
        },

        show: function() {
            if(!this.isRender) {
                this.render();
            }
            Component.prototype.show.apply(this,arguments);
        },

        initBody: function(option) {

        },

        renderBody: function() {
            this.$body = this.$el.find('.body');
            this.$body.html(this.bodyTemplate(this.cfg));
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