// Router.js - Defines a backbone router class for the app.
var Router = Backbone.Router.extend({

  routes: {
    'print': 'printStuff',
    'songs/:title' : 'playSong'
  },

  printStuff: function(x){
    if (x) {
      console.log(x);
    } else {
      console.log('Hello, world!');
    }
  },

  playSong: function(title) {
    console.log('Going to play: ' + title);
  }

});
