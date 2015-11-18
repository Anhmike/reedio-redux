var connect = require('react-redux').connect;
var React = require('react');
var Test = require('../components/Test');

var App = React.createClass({

  componentDidMount: function(){
    //this.props.dispatch(actions.loadStation());
  },

  render: function() {

    return (
      <Test test={this.props.test} />
    )
  }
});

var select = function(state) {
  return state;
};

module.exports = connect(select)(App);
