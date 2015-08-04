define([
    'jquery',
    'underscore',
    'backbone',
    'collections/Ads',
    'views/items/AdView'
], function($, _, Backbone, Ads, AdView){

    var AddsPanel = Backbone.View.extend({

        el: '.tutor-board .content-panel',

        className: 'adds-panel',

        searchUrl: 'restapi/ad/search',

        template: _.template(
                '<div class="filter-panel"></div>' +
                '<div class="adds-list"></div>'),

        initialize: function() {
            this.ads = new Ads();
            this.listenTo(this.ads, 'reset', this.resetAds);
        },

        render: function(){
            this.$el.html(this.template({}));
            this.$addsList = this.$el.find('.adds-list');
        },

        search: function(props) {
            this.ads.fetch({
                data: $.param(props),
                url: this.searchUrl,
                reset: true
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