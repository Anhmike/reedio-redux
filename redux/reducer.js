import assign from 'object-assign';

var reducer = function(state, action) {
  
  state = state || initialState;

  switch (action.type) {
    case 'UPDATE_TEXT':
      return assign({}, state, {
        test: action.text
      });

    default:
      return state;
  }
};

var initialState = {
  test: 'This is hella testing'
};

module.exports = reducer;
