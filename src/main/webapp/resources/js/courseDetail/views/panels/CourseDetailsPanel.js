define([
    'jquery',
    'underscore',
    'backbone',
    'courseDetail/models/Course',
    'courseDetail/views/items/CourseView'
], function($, _, Backbone, Course, CourseView){

    var AddsPanel = Backbone.View.extend({

        el: '.course-details .course-details-panel',

        events: {
            'click .backward': 'backward'
        },

        courseUrl: _.template('rest-api/course/<%= courseId %>'),

        courseId: null,

        initialize: function(options) {
            if(options.courseId === undefined) {
                throw ('courseId should be specified');
            }

            this.courseId = options.courseId;

            this.courseView = new CourseView({
                el: this.$el.find('.course')
            });

            this.course = new Course();

            this.listenTo(this.course, 'change', this.changeCourse);

        },

        render: function(){
            /*this.$course = this.$el.find('.course');
            this.$tutor = this.$el.find('.tutor');
            this.$comments = this.$el.find('.comments');*/

            this.course.fetch({
                reset: true,
                url: this.courseUrl(this)
            });
        },

        changeCourse: function() {
            this.courseView.model = this.course;
            this.courseView.render();
        },

        backward: function() {
            this.trigger('backward');
        }
    });
    // Our module now returns our view
    return AddsPanel;
});