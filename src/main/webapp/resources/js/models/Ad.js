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
            name: '',
            photo: 'resources/img/noavatar.png',
            category: '',
            subject: '',
            phone: '',
            address: '',
            type: TYPE.BASIC
        }
    });

    return Ad;
});