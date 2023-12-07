const hc = require('../app/http/controllers/homeController');
const ac = require('../app/http/controllers/authController');
const cp = require('../app/http/controllers/users/cartController');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S@nu1234',
    database: 'prodrel_grow_up_store'
});
// con.connect();
con.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      return;
    }
    console.log('Connected to the database as ID', con.threadId);
  });
const initroutes = (app) => {
    app.get('/', hc(con).index);
    app.get('/login', ac(con).login);
    app.get('/register', ac(con).register);
    app.get('/cart',cp(con).cartp);
}
module.exports = initroutes;