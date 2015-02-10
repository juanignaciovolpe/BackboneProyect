"use strict";
window.APP = window.APP || {};

APP.MovieShowView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    this.movie = options.movie;

  },

  // populate the html to the dom
  render: function () {
  
    this.$el.html(_.template($('#showTemplate').html(), this.movie.toJSON()));
    return this;
  }
});

