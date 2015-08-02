define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',   // lib/backbone/backbone
    'views/panels/tutorSearch'
], function($, _, Backbone, SearchPanel){

    var Viewport = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '.body',

        cmp: {},

        // Our template for the line of statistics at the bottom of the app.
        /*statsTemplate: _.template( $('#stats-template').html() ),*/

        // New
        // Delegated events for creating new items, and clearing completed ones.
        /*events: {
            'keypress #new-todo': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },*/

        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function() {

            this.cmp.searchPanel = new SearchPanel();
           /* this.allCheckbox = this.$('#toggle-all')[0];
            this.$input = this.$('#new-todo');
            this.$footer = this.$('#footer');
            this.$main = this.$('#main');

            this.searchPanel = new SearchPanel;

            this.listenTo(app.Todos, 'add', this.addOne);
            this.listenTo(app.Todos, 'reset', this.addAll);

            // New
            this.listenTo(app.Todos, 'change:completed', this.filterOne);
            this.listenTo(app.Todos,'filter', this.filterAll);
            this.listenTo(app.Todos, 'all', this.render);

            app.Todos.fetch();*/
        },

        render: function() {
            this.cmp.searchPanel.render();
            
            this.listenTo(this.cmp.searchPanel, 'search', function(props) {
                this.search(props)
            });
        },

        search: function(props) {
            this.trigger('searchStart');

            this.trigger('searchFinish');
        }
    });
    return Viewport;
});