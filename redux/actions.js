var $ = require('jquery');

var actions = {

  fetchSongs: function (num) {
    return function(dispatch) {

      dispatch(actions.toggleLoadingSongs(true));

      $.ajax({
        url: 'songs',
        method: 'GET',
        error: function (err) {
          console.error(err);
        },
        success: function (res) {
          console.log(res);
          dispatch(actions.updateSongs(res.songs));
        }
      })

    };
  },

  toggleLoadingSongs: function (isLoading) {
    return {
      type: 'TOGGLE_LOADING_SONGS',
      isLoading: isLoading
    }
  },

  updateSongs: function(songs) {
    return {
      type: 'UPDATE_SONGS',
      songs: songs
    };
  }

};

module.exports = actions;
