define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/Viewport',
    'courseBoard/views/panels/CourseDetailsPanel'
], function($, _, Backbone, Viewport, CourseDetailsPanel){

    var courseList = Viewport.extend({

        el: '.page.course-details',

        events: {
            'click .backward': 'backward'
        },

        initialize: function() {
            Viewport.prototype.initialize.apply(this, arguments);
            this.cmp.courseDetailsPanel = new CourseDetailsPanel();

            this.cmp.courseDetailsPanel.on('backward', function() {
                console.log('backward');
            })
        },

        render: function() {
            Viewport.prototype.render.apply(this, arguments);
        },

        backward: function() {
            Backbone.history.navigate('backward', {trigger: true});
        }
    });
    return courseList;
});