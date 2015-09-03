// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    // var router = new Router();

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      console.log("Library will enqueue song");
      this.get('songQueue').push(song);
    }, this);

    params.library.on('ended', function(song) {
      this.set('currentSong', new SongModel());
    }, this); 

    this.on('change:currentSong', function() {
      this.get('currentSong').incrementCount();
    }, this);

    this.get('songQueue').on('dequeue', function() {
      if (this.get('songQueue').length === 0) {
        this.set('currentSong', new SongModel());
      }
    }, this);

    params.router.on('route:playSong', function(title) {
      console.log('Really going to play: ' + title);
      params.library.each(function(song, index, context) {
        if(song.get('title') === title) {
          song.enqueue();   
        }
      })
      // this.get('songQueue').push(song);
    }, this);

    // Backbone.history.start();
  }

});
