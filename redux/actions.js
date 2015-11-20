var actions = {

  updateText: function(text) {
    return {
      type: 'UPDATE_TEXT',
      text: text
    };
  }

};

module.exports = actions;
