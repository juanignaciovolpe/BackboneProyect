"use strict";
window.APP = window.APP || {};

APP.PersonShowView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    this.person = options.person;

  },

  // populate the html to the dom
  render: function () {
  
    this.$el.html(_.template($('#showPersonTemplate').html(), this.person.toJSON()));
    return this;
  }
});

