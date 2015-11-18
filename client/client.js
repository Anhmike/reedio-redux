var React = require('react');
var render = require('react-dom').render;
var Provider = require('react-redux').Provider;
var App = require('../containers/App');

var initialState = {
  test: 'This is hella testing'
};

var store =  require('../redux/store')(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
