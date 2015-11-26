import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import SongList from '../components/SongList';
import * as actions from '../redux/actions';

var App = React.createClass({

  render: function() {

    return (
      <SongList songs={this.props.songs} fetchSongs={this.props.fetchSongs}/>
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
