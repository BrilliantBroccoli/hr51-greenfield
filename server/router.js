const eventController = require('./controllers/eventController');

module.exports = (app) => {


  app.get('/api/event', eventController.getEvent);

  app.post('/api/event', (req, res) => {
    res.send('World');
  });

};