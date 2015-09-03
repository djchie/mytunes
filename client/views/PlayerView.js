// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended':'handleEnded'
  },

  initialize: function() {
    // this.$el.on('ended', function() {
    //   this.model.ended();
    // }.bind(this));
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  handleEnded: function() {
    this.model.ended();
  },

  render: function() {

    var srcString = this.model.get('url');
    if (srcString === undefined) {
      srcString = '';
    }
    return this.$el.attr('src', srcString);

    // Original code
    // return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
