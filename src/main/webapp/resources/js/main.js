require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        user: '/tutorex.com/models/User'
    }

});

require([
    'backbone',
    'app',
    'core/models/Session'
], function(Backbone, App, Session){

    App.session = new Session({});
    App.initialize();

    Backbone.history.start({
        root: '/'
    });
});