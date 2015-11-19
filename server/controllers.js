var React = require('react');
var Provider = require('react-redux').Provider;
var App = React.createFactory(require('../containers/App'));
var renderToString = require('react-dom/server').renderToString;

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
