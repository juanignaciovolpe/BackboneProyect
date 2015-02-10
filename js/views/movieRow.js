"use strict";
window.APP = window.APP || {};
APP.MovieRowView = Backbone.View.extend({
  // the wrapper defaults to div, so only need to set this if you want something else
  // like in this case we are in a table so a tr
  tagName: "div",

  className: "col-md-3 rowFront",

  
  // functions to fire on events
  events: {
    "click a.delete": "destroy"
  },

  // the constructor
  initialize: function (options) {
    // model is passed through
    this.movie  = options.movie;
    this.movies = options.movies;
  },

  // populate the html to the dom
  render: function () {
    // var release;
    // release = this.movie.get('release_date');
    var movie = this.movie;
    console.log(movie.toJSON());
    // console.log(release);
    // var fecha = release.substring(0, 4);
    // console.log(fecha);
    //console.log(this.movie.get('release_date').substring(0, 4));
    this.$el.html(_.template($('#rowTemplate').html(), this.movie.toJSON()));
    return this;
  },

  // delete the model
  destroy: function (event) {
    event.preventDefault();
    event.stopPropagation();
    // we would call
    // this.model.destroy();
    // which would make a DELETE call to the server with the id of the item
    this.notes.remove(this.note);
    this.$el.remove();
  }
});
