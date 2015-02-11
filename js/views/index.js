"use strict";
window.APP = window.APP || {};

APP.IndexView = Backbone.View.extend({
  // the constructor
 
  // populate the html to the dom
  render: function () {
    this.$el.html($('#indexTemplate').html());
    //this.addAll();
    return this;
  }
});

