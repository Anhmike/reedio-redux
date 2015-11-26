import React from 'react';

var Song = React.createClass({

  handleClick: function() {
    //this.props.fetchSongs(3);
  },

  render: function() {

    return (
      <ul>
        <li>
          <div>{this.props.song.title}</div>
          <div>by {this.props.song.artist}</div>
          <button onClick={this.handleClick}>more info</button>
        </li>
      </ul>
    )
  }
});

module.exports = Song;
