define([
    'jquery',
    'underscore',
    'backbone',
    'collections/Ads',
    'view/items/Ad'
], function($, _, Backbone, Ads, AdView){

    var AddsPanel = Backbone.View.extend({

        className: 'adds-panel',

        searchUrl: 'restapi/ad/search',

        el: $('.tutor-board .content-panel'),

        template: _.template(
                '<div class="filter-panel">' +
                '</div>' +
                '<div class="adds-list"></div>'),

        initialize: function() {
            this.ads = new Ads();
            this.listenTo(this.ads, 'reset', this.resetAds);
        },

        render: function(){
            this.$addsList = this.$el.find('.adds-list');
        },

        search: function() {
            this.ads.fetch({
                data: $.param({ page: 1}),
                url: this.searchUrl
            });
        },

        resetAds: function() {
            this.$addsList.empty();
            this.ads.each(this.addAd, this);
        },
        
        addAd: function(ad) {
            var view = new AdView({
                model: ad
            });
            this.$addsList.append(view.render().el);
        }
    });
    // Our module now returns our view
    return AddsPanel;
});