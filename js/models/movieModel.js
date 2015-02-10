"use strict";
window.APP = window.APP || {};

APP.MovieModel = Backbone.Model.extend({

	urlRoot: 'http://api.themoviedb.org/3/movie/',
	url: function(){
		var url = 'http://api.themoviedb.org/3/movie/' + this.id + '?api_key=a6f213b0214f72aea52497ce5310cd0e';
		return url; 
	}
  
});



APP.MovieRatedCollection = Backbone.Collection.extend({

  initialize: function() {
    //this.page = options.page;
  },
  url: function() {
    return 'http://api.themoviedb.org/3/movie/top_rated?api_key=a6f213b0214f72aea52497ce5310cd0e';
  },

  parse: function (response) {
    return response.results;
},
  
  // Reference to this collection's model.
  model: APP.MovieModel,
    
});


APP.MovieUpcomingCollection = Backbone.Collection.extend({

  initialize: function() {
    //this.page = options.page;
  },
  url: function() {
    return 'http://api.themoviedb.org/3/movie/upcoming?api_key=a6f213b0214f72aea52497ce5310cd0e';
  },

  parse: function (response) {
    return response.results;
},
  
  // Reference to this collection's model.
  model: APP.MovieModel,
    
});

APP.MoviePlayingCollection = Backbone.Collection.extend({

  initialize: function() {
    //this.page = options.page;
  },
  url: function() {
    return 'http://api.themoviedb.org/3/movie/now_playing?api_key=a6f213b0214f72aea52497ce5310cd0e';
  },

  parse: function (response) {
    return response.results;
},
  
  // Reference to this collection's model.
  model: APP.MovieModel,
    
});


APP.MoviePopularCollection = Backbone.Collection.extend({

  initialize: function() {
    //this.page = options.page;
  },
  url: function() {
    return 'http://api.themoviedb.org/3/movie/popular?api_key=a6f213b0214f72aea52497ce5310cd0e';
  },

  parse: function (response) {
    return response.results;
},
  
  // Reference to this collection's model.
  model: APP.MovieModel,
    
});




APP.PersonModel = Backbone.Model.extend({

  urlRoot: 'http://api.themoviedb.org/3/person/',
  url: function(){
    var url = 'http://api.themoviedb.org/3/person/' + this.id + '?api_key=a6f213b0214f72aea52497ce5310cd0e';
    return url; 
  }
  
});//http://api.themoviedb.org/3/person/1?api_key=a6f213b0214f72aea52497ce5310cd0e