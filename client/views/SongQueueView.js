// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.collection.on('all', this.render, this);
    this.collection.on('add', function(song) {
      if (this.collection.length === 1) {
        this.collection.playFirst();
      }
    }, this);

    this.collection.on('remove', function(song) {
      if (this.collection.length === 0) {
        // Stop the player, or somehow make the currentSong to null
      } else {
        // Play the next song on the queue
        this.collection.playFirst();
      }
    }, this);
  },

  render: function() {

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  // initialize: function() {
  // },
  }

});
