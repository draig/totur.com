// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'courseBoard/views/Viewport',
    'courseDetail/views/Viewport'
], function($, _, Backbone, CourseBoard, CourseDetail){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'course-board': 'course-board',
            'course/:id': 'course-details',
            '': 'defaultPage'
        }
    });

    var viewport;

    function showViewport(viewportClass, options){
        viewport && viewport.hide();
        viewport = new viewportClass(options||{});
        viewport.render();
        viewport.show();
    };

    var initialize = function(){
        var app_router = new AppRouter, viewport;
        app_router.on('route:course-board', function(){
            showViewport(CourseBoard);
        });
        app_router.on('route:course-details', function(id){
            console.log('route:course-details ' + id);
            showViewport(CourseDetail, {courseId: id});
        });
        app_router.on('route:defaultPage', function(){
            Backbone.history.navigate('course-board', {trigger: true});
        });



        Backbone.history.start({
            root: '/'
        });
    };
    return {
        initialize: initialize
    };
});