import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import Test from '../components/Test';
import * as actions from '../redux/actions';

var App = React.createClass({

  componentDidMount: function(){
    //this.props.updateText('this is hella updated!');
  },

  render: function() {

    return (
      <Test test={this.props.test} cb={this.props.updateText}/>
    )
  }
});

var mapStateToProps = function (state) {
  return state;
};

var mapDispatchToProps = function (dispatch) {
  return bindActionCreators(actions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
