"use strict";
window.APP = window.APP || {};

APP.PagerView = Backbone.View.extend({
  // the wrapper defaults to div, so only need to set this if you want something else
  // like in this case we are in a table so a tr
  
  
  // the constructor
  initialize: function (options) {
    // model is passed through


    this.parameters = {
            "method": options.method,
            "total_pages": options.total_pages,
            "page": options.page,
            "prev": options.page - 1,
            "post": (parseInt(options.page)+1),
          }
    // this.total_pages  = options.total_pages;
    // this.page = options.page;
    // this.prev = options.page - 1;
    // this.post = (parseInt(options.page)+1);

  
  },

  // populate the html to the dom

  render: function () {
    //console.log(this.objet);
  
    this.$el.html(_.template($('#pagerTemplate').html(), this.parameters));
    return this;
  },

});
