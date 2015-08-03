define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var TYPE = {
        BASIC: 'basic',
        AD: 'advertising',
        BEST: 'best'

    };

    var Ad = Backbone.Model.extend({
        defaults: {
            available: true,
            name: 'Cидорчук Валентина Николаевна',
            photo: 'resources/img/no-avatar.png',
            category: '',
            subject: '',
            phone: '+375447604989',
            address: 'г.Минск, ул. Окрябрьская 10, д. 15',
            type: TYPE.BASIC
        }
    });

    return Ad;
});