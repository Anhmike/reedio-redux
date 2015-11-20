import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../containers/App';
import { DevTools, DebugPanel } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

var initialState = {
  test: 'This is hella testing'
};

var store =  require('../redux/store')(initialState);

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={DiffMonitor} shortcut='ctrl+d' />
    </DebugPanel>
  </div>,
  document.getElementById('app')
);
