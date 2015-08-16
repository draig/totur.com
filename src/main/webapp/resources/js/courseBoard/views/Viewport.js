define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',   // lib/backbone/backbone
    'core/views/Viewport',
    'courseBoard/views/pages/CourseList',
    'courseBoard/views/pages/CourseDetails'
], function($, _, Backbone, Viewport, CourseList, CourseDetails){

    var courseBoard = Viewport.extend({

        el: '.tutor-board',

        initialize: function() {
            Viewport.prototype.initialize.apply(this, arguments);
            this.cmp.courseList = new CourseList();
            this.cmp.courseDetails = new CourseDetails();
        },

        render: function(options) {
            options = options || {};
            if(options.page === 'course-details') {
                this.cmp.courseDetails.render(options);
                this.cmp.courseDetails.show();
                this.cmp.courseList.hide();
                return;
            }
            this.cmp.courseList.render(options);
            this.cmp.courseList.show();
            this.cmp.courseDetails.hide();
        }
    });
    return courseBoard;
});