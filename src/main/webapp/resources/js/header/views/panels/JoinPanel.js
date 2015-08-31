define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var AddsPanel = Backbone.View.extend({

        events: {
            'click .vk-btn': 'vkAuth',
            'click .ok-btn': 'okAuth'
        },


        template: _.template(
                '<label class="social-network-label">Войти через социальные сети</label>' +
                '<button class="sign-in-btn vk-btn">Вконтакте</button>' +
                '<button class="sign-in-btn ok-btn">Одноклассники</button>'),

        render: function(){
            this.$el.html(this.template({}));
        },

        vkAuth: function() {
            console.log('vk-auth');
        },

        okAuth: function() {
            console.log('ok-auth');
        }
    });
    // Our module now returns our view
    return AddsPanel;
});