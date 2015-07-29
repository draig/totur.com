define([
    'jquery',
    'underscore',
    'backbone',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    'text!templates/project/list.html'
], function($, _, Backbone, projectListTemplate){
    var ProjectListView = Backbone.View.extend({
        el: $('.t-search'),
        tsearchTemplate:
            '<div class="t-search-body">' +
                '<label>Search result: 194756</label>' +
                '<select class="t-search-category"></select>' +
                '<select class="t-search-subject"></select>' +
                '<button class="t-search-btn"></button>' +
            '</div>',
        render: function(){
            // Append our compiled template to this Views "el"
            this.$el.append(_.template(this.tsearchTemplate, {}));
        }
    });
    // Our module now returns our view
    return ProjectListView;
});