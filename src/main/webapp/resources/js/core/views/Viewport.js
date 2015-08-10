define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone'   // lib/backbone/backbone
], function($, _, Backbone, SearchPanel, AddsPanel){

    var Viewport = Backbone.View.extend({

        cmp: {},

        initialize: function() {

        },

        render: function() {
            $.each(this.cmp, function(key, value) {
                this.cmp[key].render && this.cmp[key].render();
            }.bind(this));
        },

        hide: function() {
            this.$el.hide();
        },

        show: function() {
            this.$el.show();
        }

    });
    return Viewport;
});