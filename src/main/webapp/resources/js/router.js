// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'courseBoard/views/Viewport',
    'header/views/Viewport'
], function($, _, Backbone, CourseBoard, Header){

    var Router = Backbone.Router.extend({
        routes: {
            'course-board': 'courseBoard',
            'course/:id': 'courseDetails',
            'backward': 'backward',
            '': 'defaultPage'
        },

        initialize: function() {
            //_.bindAll(this);
            this._courseBoardView = new CourseBoard();
        },

        courseBoard: function() {
            this.showViewport(this._courseBoardView, {
                page: 'course-board'
            });
        },

        courseDetails: function(id) {
            console.log('route:course-details ' + id);
            this.showViewport(this._courseBoardView, {
                page: 'course-details',
                courseId: id
            });
        },

        backward: function() {
            this.showViewport(this._courseBoardView, {
                page: 'backward'
            });
        },

        defaultPage: function() {
            Backbone.history.navigate('course-board', {trigger: true});
        },

        showViewport: function(newViewport, renderOptions) {
            if(!this.header){
                this.header = new Header({});
                this.header.render();
            }
            this.viewport && this.viewport.hide();
            this.viewport = newViewport;
            this.viewport.render(renderOptions || {});
            this.viewport.show();
        }
    });

    return Router;
});