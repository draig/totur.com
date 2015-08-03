define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){

    var AdView = Backbone.View.extend({

        className: 'tutor-ad',

        image: '',

        template: _.template(
                '<div class="photo">' +
                    '<img src="<%= photo %>">' +
                '</div>'+
                '<div class="tutor-name"><%= name %></div>' +
                '<div class="tutor-category"><%= category %></div>' +
                '<div class="tutor-subject"><%= subject %></div>'),

        initialize: function(option) {

        },

        render: function() {
            var renderData = this.getModelData();
            this.$el.html(this.template(renderData));
            return this;
        },

        getModelData: function() {
            return _.clone(this.model.attributes);
        }
    });

    return AdView;
});