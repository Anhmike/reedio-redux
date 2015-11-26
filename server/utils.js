var fs = require('fs');

var utils = {

  fetchRandomSongs: function (num) {
    var results = [];

    var songs = JSON.parse(fs.readFileSync('./songs.json', 'utf8'));
    while (songs.length && results.length < num) {
      var index = utils.generateRandomIndex(songs.length);
      results.push(songs.splice(index, 1)[0]);
    }

    return results;

  },

  generateRandomIndex: function (len) {
    return Math.floor(Math.random() * len);
  }

};

module.exports = utils;
