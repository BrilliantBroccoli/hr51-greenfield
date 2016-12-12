const axios = require('axios');
const apiKey = require('../apiKey.js');
const userRepository = require('../db/userRepository');


module.exports = {
  getEvent: (req, res) => {
    let category = req.query.category;
    let date = req.query.date || 'Today';
    let page = req.query.page || 1;
    let location = req.query.location || 'California';

    if (!category) {
      return res.status(400).send('category must be defined');
    }

    //userRepo to add request to db
    userRepository.register(req.connection.remoteAddress, category)
    .then((result) => {
      console.log('Success: registered User. In the category:', category);
    }).catch((error) => {
      console.error('Error in saving User', error);
    });

    // in parallel, runs a request to api while adding to db
    //get to api from server with axios
    axios.get('http://api.eventful.com/json/events/search?app_key=' + apiKey + '&c=' + category + '&date=' + date + '&page_size=4' + '&page_number=' + page + '&location=' + location)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

};