define([
    'jquery',
    'underscore',
    'backbone',
    'courseBoard/models/Course',
    'courseBoard/views/items/CourseView'
], function($, _, Backbone, Course, CourseView){

    var AddsPanel = Backbone.View.extend({

        el: '.course-details .course-details-panel',

        courseUrl: _.template('rest-api/course/<%= courseId %>'),

        courseId: null,

        course: null,

        initialize: function() {
            Backbone.View.prototype.initialize.apply(this, arguments);

            this.course = new Course();

            this.listenTo(this.course, 'change', this.changeCourse);

            this.courseView = new CourseView({
                el: this.$el.find('.course')
            });
        },

        render: function(options){
            options = options || {};

            if(options.courseId === undefined) {
                throw ('courseId should be specified');
            }
            this.courseId = options.courseId;

            this.course.fetch({
                reset: true,
                url: this.courseUrl(this)
            });
        },

        changeCourse: function() {
            this.courseView.model = this.course;
            this.courseView.render();
        }
    });

    return AddsPanel;
});