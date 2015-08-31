<%@ page contentType="application/javascript;charset=UTF-8" language="java" %>

define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Course = Backbone.Model.extend({
        defaults: {
            auth: ${user.auth},
            priority: '',
            name: '${user.username}',
            ava: ''
        }
    });

    return Course;
});