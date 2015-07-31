define([
    'jquery',
    'underscore',
    'backbone',
    // Using the Require.js text! plugin, we are loaded raw text
    // which will be used as our views primary template
    //'text!templates/project/list.html'
], function($, _, Backbone/*, projectListTemplate*/){
    var CATEGORYS = {
        ct: {
            title: 'ЦТ',
            subjects: {
                math: 'математика',
                russian: 'русский'
            }
        },
        highschool: {
            title: 'Старшая школа',
            subjects: {
                history: 'история',
                belarussian: 'беларусский'
            }
        }
    };
    var ProjectListView = Backbone.View.extend({
        el: $('.tutor-board .side-panel'),
        template: _.template(
            '<div class="panel-header">Search result</div>' +
            '<div class="panel-body">' +
                '<label for="category">Category</label>' +
                '<select class="t-search-category" name="category">' +
                    '<option selected style="display: none"></option>' +
                '</select>' +
                '<label for="subject">Subject</label>' +
                '<select class="t-search-subject" name="subject"></select>' +
                '<button class="t-search-btn">Search</button>' +
            '</div>'),
        render: function(){
            var option;
            // Append our compiled template to this Views "el"
            this.$el.html(this.template({}));
            this.$category = this.$el.find('.t-search-category');
            this.$subject = this.$el.find('.t-search-subject');
            this.$search = this.$el.find('.t-search-btn');
            for(option in CATEGORYS) {
                this.$category.append('<option value="' + option + '">' + CATEGORYS[option].title + '</option>');
            }
            this.$subject.hide();

            this.$category.on('change', function() {
                this.$subject.empty();
                this.$subject.append('<option selected style="display: none"></option>');
                var subjects = CATEGORYS[this.$category.val()].subjects;
                for(option in subjects) {
                    this.$subject.append('<option value="' + option + '">' + subjects[option] + '</option>');
                }
                this.$subject.show();
            }.bind(this));

            this.$subject.on('change', function() {
            }.bind(this));

            this.$search.on('click', function() {
                this.trigger('search', this.getSearchCfg());
            }.bind(this));


        },

        getSearchCfg: function() {
            var cfg = {};
            cfg.category = this.$category.val();
            cfg.subject = this.$subject.val();
            return cfg;
        }
    });
    // Our module now returns our view
    return ProjectListView;
});