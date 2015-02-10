"use strict";
window.APP = window.APP || {};
APP.MovieRouter = Backbone.Router.extend({
  routes: {
    
    "": "index",
    "movies/topRated/:page": "topRated",
    "movies/popular/:page": "popular",
    "movies/upcoming/:page": "upcoming",
    "movies/nowPlaying/:page": "nowPlaying",
    "movie/:id/view": "showMovie", 
    "person/:id/view": "showPerson",


  },

  initialize: function () {
    // this.notes = options.notes;
    // this is debug only to demonstrate how the backbone collection / models work
    // this.notes.bind('reset', this.updateDebug, this);
    // this.notes.bind('add', this.updateDebug, this);
    // this.notes.bind('remove', this.updateDebug, this);
    //this.index();
  },

  updateDebug: function () {
    $('#output').text(JSON.stringify(this.notes.toJSON(), null, 4));
  },




  showMovie: function (id) {
   
    var movie = new APP.MovieModel({id: id});
   
    var self = this;
    movie.fetch();
    movie.on('change',function(){
    
      self.currentView = new APP.MovieShowView({
      movie: movie
    });
      $('#primary-content').html(self.currentView.render().el);



       var urlStars = "http://api.themoviedb.org/3/movie/" + id + "/credits?api_key=a6f213b0214f72aea52497ce5310cd0e"
    $.getJSON(urlStars, function(result){

//http://api.themoviedb.org/3/person/1?api_key=a6f213b0214f72aea52497ce5310cd0e
      var stars = result.cast;

      console.log(stars.length);
      stars.forEach(function(entry, index) {

        if(stars.length == (index + 1)) {
          $('.stars').append('<a href="#person/' + entry.id + '/view" class="personLink">' + entry.name + '</a> (as "' + entry.character + '")<br/>');
        } 
        else {
          $('.stars').append('<a href="#person/' + entry.id + '/view" class="personLink">' + entry.name  + '</a> (as "' + entry.character + '"), ' + '<br/>');
        }
       });

      var crew = result.crew;

      console.log(stars.length);
      crew.forEach(function(entry, index) {

        if(crew.length == (index + 1)) {
          $('.crew').append('<a href="#person/' + entry.id + ' /view" class="personLink">' + entry.name + '</a> (department: "' + entry.department + '", job: "' + entry.department + '")<br/>');
        } 
        else {
          $('.crew').append('<a href="#person/' + entry.id + '/view" class="personLink">' + entry.name + '</a> (department: "' + entry.department + '", job: "' + entry.department + '"),<br/>');
        }


           
      });

      

     
    

      
     
      //$('#primary-content').prepend(postPager.render().el);

            
    });
    });





    this.currentView = new APP.MenuView({
      
      
      method: 'showMovie',
      
    });
    $('#menu-content').html(this.currentView.render().el);

  
    
    
  },

  showPerson: function (id) {
   
    var person = new APP.PersonModel({id: id});
   
    var self = this;
    person.fetch();
    person.on('change',function(){
    
      self.currentView = new APP.PersonShowView({
      person: person
    });
      $('#primary-content').html(self.currentView.render().el);



    });





    this.currentView = new APP.MenuView({
      
      
      method: 'showMovie',
      
    });
    $('#menu-content').html(this.currentView.render().el);

  
    
    
  },



  topRated: function (page) {



    var movies = new APP.MovieRatedCollection();
    //console.log(collection);
    movies.fetch({reset: true, data: $.param({page: page})});

   

    this.currentView = new APP.MoviesRatedView({
      
      
      movies: movies,
      
    });
    $('#primary-content').html(this.currentView.render().el);


    var prePager;
    var postPager;
    $.getJSON("http://api.themoviedb.org/3/movie/top_rated?api_key=a6f213b0214f72aea52497ce5310cd0e", function(result){


      var total_pages = result.total_pages;

      prePager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'topRated'

      });

      postPager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'topRated'

      });
    

      
      $('#primary-content').append(prePager.render().el);
      //$('#primary-content').prepend(postPager.render().el);

            
    });

    this.currentView = new APP.MenuView({
      
      
      method: 'topRated',
      
    });
    $('#menu-content').html(this.currentView.render().el);

    
    


    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  },


  popular: function (page) {



    var movies = new APP.MoviePopularCollection();
    //console.log(collection);
    movies.fetch({reset: true, data: $.param({page: page})});

   

    this.currentView = new APP.MoviesPopularView({
      
      
      movies: movies,
      
    });
    $('#primary-content').html(this.currentView.render().el);


    var prePager;
    var postPager;
    $.getJSON("http://api.themoviedb.org/3/movie/top_rated?api_key=a6f213b0214f72aea52497ce5310cd0e", function(result){


      var total_pages = result.total_pages;

      prePager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'popular'

      });

      postPager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'popular'

      });
    

      
      $('#primary-content').append(prePager.render().el);
      //$('#primary-content').prepend(postPager.render().el);

            
    });

    this.currentView = new APP.MenuView({
      
      
      method: 'popular',
      
    });
    $('#menu-content').html(this.currentView.render().el);

    
    


    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  },


  upcoming: function (page) {



    var movies = new APP.MovieUpcomingCollection();
    //console.log(collection);
    movies.fetch({reset: true, data: $.param({page: page})});

   

    this.currentView = new APP.MoviesUpcomingView({
      
      
      movies: movies,
      
    });
    $('#primary-content').html(this.currentView.render().el);


    var prePager;
    var postPager;
    $.getJSON("http://api.themoviedb.org/3/movie/upcoming?api_key=a6f213b0214f72aea52497ce5310cd0e", function(result){


      var total_pages = result.total_pages;

      prePager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'upcoming'

      });

      postPager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'upcoming'

      });
    

      
      $('#primary-content').append(prePager.render().el);
      //$('#primary-content').prepend(postPager.render().el);

            
    });

    this.currentView = new APP.MenuView({
      
      
      method: 'upcoming',
      
    });
    $('#menu-content').html(this.currentView.render().el);

    
    


    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  },


  nowPlaying: function (page) {



    var movies = new APP.MoviePlayingCollection();
    //console.log(collection);
    movies.fetch({reset: true, data: $.param({page: page})});

   

    this.currentView = new APP.MoviesNowPlayingView({
      
      
      movies: movies,
      
    });
    $('#primary-content').html(this.currentView.render().el);


    var prePager;
    var postPager;
    $.getJSON("http://api.themoviedb.org/3/movie/top_rated?api_key=a6f213b0214f72aea52497ce5310cd0e", function(result){


      var total_pages = result.total_pages;

      prePager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'nowPlaying'

      });

      postPager = new APP.PagerView({
        
        page: page,
        total_pages: total_pages,
        method: 'nowPlaying'

      });
    

      
      $('#primary-content').append(prePager.render().el);
      //$('#primary-content').prepend(postPager.render().el);

            
    });

    this.currentView = new APP.MenuView({
      
      
      method: 'nowPlaying',
      
    });
    $('#menu-content').html(this.currentView.render().el);

    
    


    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  },


  index: function () {

    $('#primary-content').html('');
    

    this.currentView = new APP.MenuView({
      
      
      method: 'index',
      
    });
    $('#menu-content').html(this.currentView.render().el);

    
    


    // we would call to the index with
    // this.notes.fetch()
    // to pull down the index json response to populate our collection initially
  },

});
