define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var AdView = Backbone.View.extend({

        className: 'tutor-ad',

        image: '',

        openUrl: _.template('course/<%= id %>'),

        events: {
            'click .tutor-ad': 'open'
        },

        template: _.template(
                '<div class="ad-body">' +
                    '<div class="photo">' +
                        '<img src="<%= photo %>">' +
                    '</div>'+
                    '<div class="info">' +
                        '<div class="tutor-name"><%= name %></div>' +
                        '<div class="tutor-category"><%= category %></div>' +
                        '<div class="tutor-subject"><%= subject %></div>' +
                    '</div>' +
                '</div>'),

        initialize: function(option) {

        },

        render: function() {
            var renderData = this.getModelData();
            this.$el.html(this.template(renderData));
            this.$el.on('click', this.open.bind(this));
            return this;
        },

        getModelData: function() {
            return _.clone(this.model.attributes);
        },

        open: function() {
            Backbone.history.navigate(this.openUrl(this.getModelData()), {trigger: true});
        }
    });

    return AdView;
});