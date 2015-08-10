define([
    'underscore',
    'backbone',
    'courseBoard/models/Ad'
], function(_, Backbone, Ad){

    var Ads = Backbone.Collection.extend({
        model: Ad
    });
    return Ads;
});