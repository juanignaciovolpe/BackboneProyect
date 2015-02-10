"use strict";
window.APP = window.APP || {};

APP.MenuView = Backbone.View.extend({
  // the wrapper defaults to div, so only need to set this if you want something else
  // like in this case we are in a table so a tr
   
  tagName: "div",

  className: "menu",
  
  // the constructor
  initialize: function (options) {
    // model is passed through

    this.parameters = {
            "method": options.method,
            
          }



    // this.page = options.page;
    // this.prev = options.page - 1;
    // this.post = (parseInt(options.page)+1);

  
  },

  // populate the html to the dom

  render: function () {
    //console.log(this.objet);

    console.log(this.parameters);
    this.$el.html(_.template($('#menuTemplate').html(), this.parameters));
    
    return this;
  },

});
