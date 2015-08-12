define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Course = Backbone.Model.extend({
        defaults: {
            available: true,
            category: '',
            subject: '',
            description: 'описание курса',
            address: 'г.Минск, ул. Окрябрьская 10, д. 15'
        }
    });

    return Course;
});