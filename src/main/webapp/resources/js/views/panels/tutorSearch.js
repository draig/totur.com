define([
    'jquery',
    'underscore',
    'backbone',
    'views/core/Select'
], function($, _, Backbone, Select){
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

    var CITY = {
        minsk: 'Минск',
        gomel: 'Гомель'
    };

    var ProjectListView = Backbone.View.extend({

        className: 'search-panel',

        el: $('.tutor-board .side-panel'),

        template: _.template(
            '<div class="panel-header">' +
                '<div class="panel-header-label">Search result</div>' +
            '</div>' +
            '<div class="panel-body">' +
                '<button id="start-search" class="btn">Search</button>' +
            '</div>'),

        initialize: function() {
            this.city = new Select({
                id: 'city-select',
                label: 'city'
            });
            this.category = new Select({
                id: 'category-select',
                label: 'category'
            });
            this.subject = new Select({
                id: 'subject-select',
                label: 'subject'
            })
        },

        render: function(){
            var option;
            // Append our compiled template to this Views "el"
            this.$el.html(this.template({}));
            this.$el.addClass(this.className);

            this.city.render();
            this.category.render();
            this.subject.render();

            for(option in CITY) {
                this.city.addOption(option, CITY[option]);
            }

            for(option in CATEGORYS) {
                this.category.addOption(option, CATEGORYS[option].title);
            }

            this.category.on('change', function(value) {
                if (value) {
                    this.subject.clear();

                    var subjects = CATEGORYS[value].subjects;
                    for(option in subjects) {
                        this.subject.addOption(option, subjects[option]);
                    }
                    this.subject.disable(false);
                }
            }.bind(this));


            this.subject.prependTo(this.$el.find(".panel-body"));
            this.category.prependTo(this.$el.find(".panel-body"));
            this.city.prependTo(this.$el.find(".panel-body"));

            this.subject.disable(true);

            /*this.$search.on('click', function() {
                this.trigger('search', this.getSearchCfg());
            }.bind(this));*/


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