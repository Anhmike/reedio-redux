import React from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';
import { renderToString } from 'react-dom/server';
import utils from './utils';

var controllers = {

  renderIndex: function(req, res) {

    var songs = utils.fetchRandomSongs(3);

    var initialState = {
      songs: songs
    };

    var store =  require('../redux/store')(initialState);

    var markup = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    res.render('app', {
      markup: markup,
      initialState: JSON.stringify(initialState)
    });
  },

  fetchSongs: function(req, res) {

    var songs = utils.fetchRandomSongs(3);

    res.status(200).json({songs: songs});
  }

};

module.exports = controllers;
