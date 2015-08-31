define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/Dialog',
    'header/views/panels/SocialNetworkPanel'
], function($, _, Backbone, Dialog, SocialNetworkPanel){

    var AuthDialog = Dialog.extend({

        bodyTemplate: _.template(
            '<div class="panel social-network-panel"></div>' +
            '<div class="panel auth-panel">' +
                '<div class="join" style="display: none"></div>' +
                '<div class="signin" style="display: none"></div>' +
                '<div class="join-approve" style="display: none"></div>' +
            '</div>'),


        initBody: function() {
            this.socialNetworkPanel = new SocialNetworkPanel();
        },

        renderBody: function() {
            Dialog.prototype.renderBody.apply(this, arguments);
            this.socialNetworkPanel.setElement(this.$body.find('.social-network-panel')).render();
        }
    });

    return AuthDialog;
});