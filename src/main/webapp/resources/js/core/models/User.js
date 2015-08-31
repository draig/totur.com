define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Course = Backbone.Model.extend({
        defaults: {
            auth: '',
            priority: '',
            name: '',
            ava: ''
        }
    });

    return Course;
});