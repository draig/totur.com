// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'courseBoard/views/Viewport'
], function($, _, Backbone, CourseBoard){

    var AppRouter = Backbone.Router.extend({
        routes: {
            'course-board': 'course-board',
            'course/:id': 'course-details',
            'backward': 'backward',
            '': 'defaultPage'
        }
    });

    var viewport;


    function showViewport(newViewport, renderOptions){
        viewport && viewport.hide();
        viewport = newViewport;
        viewport.render(renderOptions || {});
        viewport.show();
    };

    var courseBoard = new CourseBoard();

    var initialize = function(){
        var app_router = new AppRouter, viewport;
        app_router.on('route:course-board', function(){
            showViewport(courseBoard, {
                page: 'course-board'
            });
        });
        app_router.on('route:backward', function(){
            showViewport(courseBoard, {
                page: 'backward'
            });
        });
        app_router.on('route:course-details', function(id){
            console.log('route:course-details ' + id);
            showViewport(courseBoard, {
                page: 'course-details',
                courseId: id
            });
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