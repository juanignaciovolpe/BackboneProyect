"use strict";
window.APP = window.APP || {};

APP.MoviesNowPlayingView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    // model is passed through

    this.movies = options.movies;

    //http://api.themoviedb.org/3/movie/top_rated?api_key=a6f213b0214f72aea52497ce5310cd0e
    this.movies.bind('reset', this.addAll, this);
  },

  // populate the html to the dom
  render: function () {
    this.$el.html($('#moviesTemplate').html());
    //this.addAll();
    return this;
  },

  addAll: function () {
    // clear out the container each time you render index
    this.$el.find('#container').children().remove();
    //console.log(this.notes);
    _.each(this.movies.models, $.proxy(this, 'addOne'));
  },

  addOne: function (movie) {

    var view = new APP.MovieRowView({
      movies: this.movies, 
      movie: movie
    });
    this.$el.find("#container").append(view.render().el);
  }
});

