// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // Where we handled when songs get enqueued and dequeued
  },

  playFirst: function() {
    this.at(0).play();
  }

});