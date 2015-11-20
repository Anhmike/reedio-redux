import React from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';
// var App = React.createFactory(require('../containers/App'));
import { renderToString } from 'react-dom/server';

var controllers = {

  render: function(req, res) {

    var initialState = {
      test: 'This is hella testing'
    };

    var store =  require('../redux/store')(initialState);

    var markup = renderToString(

      <Provider store={store}>
        <App />
      </Provider>
    );

    res.render('app', {
      markup: markup
    });
  }

};

module.exports = controllers;
