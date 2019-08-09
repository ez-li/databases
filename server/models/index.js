var db = require('../db');

// model talks to the view (client app)
// takes the data from DB
db.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
});

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (body, cb) {
      var values = [body.username, body.message, body.roomname];
      var query = 'INSERT INTO messages SET username = "' + body.username + '", message = "' + body.message + '", roomname = "' + body.roomname + '"';
      db.query(query, (err, x) => {
        if (err) {
          console.log(err);
        } else {
          cb(null, x);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  // users: {
  //   // Ditto as above.
  //   get: function () {},
  //   post: function (username) {
  //     var query = 'INSERT INTO users (username) values ?';
  //     // console.log('testing input ', username);
  //     var values = username;
  //     // db.query(query, values);
  //     db.query(query, values, (err, result) => {
  //       if (err) {
  //         console.log('error: ', err);
  //       }
  //       else {
  //         console.log('Success' + result.affectedRows);
  //       }
  //     });
  //   }
  // }
};

