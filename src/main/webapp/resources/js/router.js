// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/Viewport',
], function($, _, Backbone, Viewport){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '/search': 'search',
            '/users': 'showUsers',

            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        app_router.on('search', function(){
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            /*var viewport = new Viewport();
             viewport.render();*/
            console.log('search');
        });
        app_router.on('defaultAction', function(actions){
            // We have no matching route, lets just log what the URL was
            console.log('No route:', actions);
        });

        var viewport = new Viewport();
        viewport.render();

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});