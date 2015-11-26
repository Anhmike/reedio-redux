import React from 'react';
import Song from './Song'

var SongList = React.createClass({

  handleClick: function() {
    this.props.fetchSongs(3);
  },

  render: function() {

    return (
      <div>
        <button onClick={this.handleClick}>fetch random songs</button><br/>
        {
          this.props.songs.map(function (song) {
            return <Song key={song.id} song={song} />
          })
        }
      </div>
    )
  }
});

module.exports = SongList;
