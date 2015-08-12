define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var Tutor = Backbone.Model.extend({
        defaults: {
            name: 'Валентина ',
            secondName: 'Николаевна',
            surname: 'Cидорчук',
            photo: 'resources/img/no-avatar.png',
            phone: '+375447604989',
            description: 'Учитель СОЩ №34. 10 лет преподаю математику в старших классах.'
        }
    });

    return Tutor;
});