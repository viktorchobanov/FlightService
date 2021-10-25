const controller = require('./controller');

module.exports = function(router) {
    router.get('/uniqueflights', controller.getUniqueFlights);

    return router;
}