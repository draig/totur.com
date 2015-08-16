define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',   // lib/backbone/backbone
    'core/views/Viewport',
    'courseBoard/views/panels/SearchPanel',
    'courseBoard/views/panels/AddsPanel'
], function($, _, Backbone, Viewport, SearchPanel, AddsPanel){

    var courseList = Viewport.extend({

        el: '.page.course-list',

        initialize: function() {
            Viewport.prototype.initialize.apply(this, arguments);
            this.cmp.searchPanel = new SearchPanel();
            this.cmp.addsPanel = new AddsPanel();

            this.listenTo(this.cmp.searchPanel, 'search', function(props) {
                this.search(props)
            });
        },

        render: function() {
            if(!this.isRender) {
                Viewport.prototype.render.apply(this, arguments);
            }
        },

        search: function(props) {
            this.cmp.addsPanel.search(props);
        }
    });
    return courseList;
});