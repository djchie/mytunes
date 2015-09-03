// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    // Can't use enqueue, need to use add because
    // when the queue is empty, there's no model that
    // sends 'enqueue' to the collection; it's still
    // in the process of being added
    this.on('add', function(song) {
      this.playFirst();
    }, this);

    this.on('dequeue', function(song) {
      console.log('SongQueue will dequeue song');
      this.remove(song);
      this.playFirst();
    }, this);

    this.on('ended', function(song) {
      console.log('SongQueue will end song');
      this.remove(song);
      this.playFirst();
    }, this);

  },

  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  }

});