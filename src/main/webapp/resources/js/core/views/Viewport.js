define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',  // lib/backbone/backbone
    'core/views/Component'
], function($, _, Backbone, Component){

    var Viewport = Component.extend({

        cmp: null,

        initialize: function() {
            this.cmp = {};
            Component.prototype.initialize.apply(this, arguments);
        },

        render: function(cfg) {
            $.each(this.cmp, function(key, value) {
                if(this.cmp[key].autoRender) {
                    this.cmp[key].autoRender(cfg);
                } else {
                    this.cmp[key].render && this.cmp[key].render(cfg);
                }
            }.bind(this));
            return Component.prototype.render.apply(this, arguments);
        }

    });
    return Viewport;
});