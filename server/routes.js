import controllers from './controllers';

module.exports = function(app) {
    app.get('/', controllers.renderIndex);
    app.get('/songs', controllers.fetchSongs);
};
