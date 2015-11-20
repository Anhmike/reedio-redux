import { connect } from 'react-redux';
import React from 'react';
import Test from '../components/Test';

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
