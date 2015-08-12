define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var AdView = Backbone.View.extend({

        className: 'course',

        events: {

        },

        template: _.template(
                '<div class="subject detail">' +
                    '<span class="label">Subject</span>' +
                    '<span class="value"><%= subject %></span>' +
                '</div>' +
                '<div class="category detail">' +
                    '<span class="label">Category</span>' +
                    '<span class="value"><%= category %></span>' +
                '</div>' +
                '<div class="address detail">' +
                    '<span class="label">Address</span>' +
                    '<span class="value"><%= address %></span>' +
                '</div>' +
                '<div class="description detail">' +
                    '<span class="label">Description</span>' +
                    '<span class="value"><%= description %></span>' +
                '</div>'),

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