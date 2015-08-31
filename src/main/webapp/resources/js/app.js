// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router){
    var App = {
        initialize: function() {
            // Pass in our Router module and call it's initialize function
            this.router.initialize();
        },

        router: new Router()
    };
    return App;
});