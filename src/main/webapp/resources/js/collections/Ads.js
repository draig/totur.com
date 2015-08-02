define([
    'underscore',
    'backbone',
    'models/Ad'
], function(_, Backbone, Ad){

    var Ads = Backbone.Collection.extend({
        model: Ad,
        url: '/restapi/search'
    });
});