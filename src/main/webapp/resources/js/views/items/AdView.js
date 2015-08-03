define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){

    var AdView = Backbone.View.extend({

        className: 'tutor-ad',

        image: '',

        template: _.template(
                '<div class="tutor-img">' +
                    '<img src="<%= image %>">' +
                '</div>'+
                '<div class="tutor-name"></div>' +
                '<div class="tutor-category"><%= model.category %></div>' +
                '<div class="tutor-subject"><%= model.subject %></div>'),

        initialize: function(option) {

        },

        render: function() {
            this.$el.html(this.template(this));
            return this;
        }
    });

    return AdView;
});