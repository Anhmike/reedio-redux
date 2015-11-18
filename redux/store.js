var applyMiddleware = require('redux').applyMiddleware;
var createStore = require('redux').createStore;
var reducer = require('./reducer');
var thunk = require('redux-thunk');

var createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

var configureStore = function(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};

var initialState = {
  test: 'This is hella testing'
};

module.exports = configureStore;
