import assign from 'object-assign';

var reducer = function(state, action) {
  
  switch (action.type) {
    case 'UPDATE_SONGS':
      return assign({}, state, {
        songs: action.songs
      });
    case 'TOGGLE_LOADING_SONGS':
      return assign({}, state, {
        loadingSongs: action.isLoading
      });
    default:
      return state;
  }
};

module.exports = reducer;
