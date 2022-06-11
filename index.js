const express = require('express');
const mysql = require('mysql');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');

const { port, dbUrl, secret } = config;
const app = express();

// TODO: Conexión a la Base de Datos (MongoDB o MySQL)
const connection = mysql.createConnection({
  host: dbUrl,
  user: 'root',
  password: 'supersecret',
  database: 'bq',
});

connection.connect();
connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) {
    return console.error(error);
  }
  console.log(`The solution is: ${results[0].solution}`);
});
connection.end();

app.set('config', config);
app.set('pkg', pkg);

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(authMiddleware(secret));

// Registrar rutas
routes(app, (err) => {
  if (err) {
    throw err;
  }

  app.use(errorHandler);

  app.listen(port, () => {
    console.info(`App listening on port ${port}`);
  });
});
