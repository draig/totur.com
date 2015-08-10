define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',   // lib/backbone/backbone
    'core/views/Viewport',
    'courseDetail/views/panels/CourseDetailsPanel'
], function($, _, Backbone, Viewport, CourseDetailsPanel){

    var courseBoard = Viewport.extend({

        el: '.course-details',

        initialize: function(options) {

            this.cmp.courseDetailsPanel = new CourseDetailsPanel({
                courseId: options.courseId
            });

            this.cmp.courseDetailsPanel.on('backward', function() {
                console.log('backward');
            })
        },

        render: function() {
            Viewport.prototype.render.apply(this, arguments);

            this.listenTo(this.cmp.searchPanel, 'search', function(props) {
                this.search(props)
            });
        }
    });
    return courseBoard;
});