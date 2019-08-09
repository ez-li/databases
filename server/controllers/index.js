var models = require('../models');

// this file is read by server/routers
// handles the requests and talks to the DB

module.exports = {
  messages: {
    get: function (req, res) {
      // res.send(console.log('test'));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // controller takes messages from client
      // pass messages to the models
      // then store them in DB
      models.messages.post(req.body, (err, x) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Success')
          res.send(x);
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // res.send(req.body);
    },
    post: function (req, res) {
      // var username = req.body.username;
      var username = 'eileen';
      models.users.post(username);
      res.send('posted to users');
    }
  }
};

