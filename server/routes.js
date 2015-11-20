import controllers from './controllers';

module.exports = function(app) {
    app.get('/', controllers.render);
};
