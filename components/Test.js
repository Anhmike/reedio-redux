import React from 'react';

var Test = React.createClass({

  handleClick: function() {
    var rand = Math.random();
    this.props.cb('New text: ' + rand);
  },

  render: function() {

    return (
      <div>
        <button onClick={this.handleClick}>Change text</button><br/>
        {this.props.test}
      </div>
    )
  }
});

module.exports = Test;
