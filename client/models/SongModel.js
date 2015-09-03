// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
    console.log('Enqueued song!');
  },

  dequeue: function() {
    this.trigger('dequeue', this);
    console.log('Dequeued song!');
  },

  ended: function() {
    this.trigger('ended', this);
    console.log('Song ended!');
  }

});
