import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devTools';

var finalCreateStore;

// if (window !== undefined) {
//   finalCreateStore = compose(
//     applyMiddleware(thunk),
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )(createStore);
// } else {
  finalCreateStore = compose(
    applyMiddleware(thunk)
  )(createStore);
// }

var configureStore = function(initialState) {
  return finalCreateStore(reducer, initialState);
};

module.exports = configureStore;
