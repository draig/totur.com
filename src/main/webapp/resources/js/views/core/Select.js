define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){

    var Select = Backbone.View.extend({

        selectOnStart: false,

        className: null,

        name: null,

        label: null,

        fakeOptionTemplate: _.template('<option selected style="display: none"></option>'),

        optionTemplate: _.template('<option value="<%= value %>"><%= displayValue %></option>'),

        template: _.template(
                    '<div class="select">'+
                        '<label><%= label %></label>' +
                        '<select name="<%= name %>"></select>' +
                    '</div>'),

        initialize: function(option) {
            this.label = option.label || '';
            this.name = option.name || '';
            this.selectOnStart = !!option.selectOnStart;
            this.$el = $(this.template(this));
        },

        render: function(){
            this.$field = this.$el.find('select');
            this.$label = this.$el.find('label');

            if(!this.selectOnStart){
                this.$field.prepend(this.fakeOptionTemplate());
            }

            this.$field.on('change', function() {
                this.trigger('change', this.$field.val());
            }.bind(this));

            return this;
        },

        addOption: function(value, displayValue) {
            var config = {
                displayValue: displayValue || value,
                value: value
            };
            this.$field.append(this.optionTemplate(config));
        },

        appendTo: function(node) {
            this.$el.appendTo(node);
        },

        prependTo: function(node) {
            this.$el.prependTo(node);
        },

        show: function() {
            this.$el.show();
        },

        hide: function() {
            this.$el.hide()
        },

        clear: function() {
            this.$field.empty();
            if(!this.selectOnStart){
                this.$field.prepend(this.fakeOptionTemplate());
            }
        },

        disable: function(disabled) {
            this.$field.attr('disabled', disabled ? 'disabled' : null);
        },

        val: function() {
            return this.$field.val();
        }
    });

    return Select;
});