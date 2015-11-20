import React from 'react';

var Test = React.createClass({

  render: function() {

    return (
      <div>
        {this.props.test}!!
      </div>
    )
  }
});

module.exports = Test;
