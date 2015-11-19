var applyMiddleware = require('redux').applyMiddleware;
var compose = require('redux').compose;
var createStore = require('redux').createStore;
var reducer = require('./reducer');
var thunk = require('redux-thunk');
var devTools = require('redux-devtools').devTools;
var persistState = require('redux-devtools').persistState;

var finalCreateStore;

if (window !== undefined) {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(thunk)
  )(createStore);
}

var configureStore = function(initialState) {
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;
