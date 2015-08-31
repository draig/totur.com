define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',   // lib/backbone/backbone
    'core/views/Viewport',
    'header/views/dialogs/AuthDialog'
], function($, _, Backbone, Viewport, AuthDialog){

    var courseBoard = Viewport.extend({

        el: 'header',

        events: {
            'click .sign-in-btn': 'signIn'
        },

        initialize: function() {
            Viewport.prototype.initialize.apply(this, arguments);
            this.cmp.authDialog = new AuthDialog();
        },

        signIn: function() {
            this.cmp.authDialog.show();
        }
    });
    return courseBoard;
});