const jwt = require('jsonwebtoken');
const connection = require('../index');
const config = require('../config');

const { secret } = config;

/** @module auth */
module.exports = (app, nextMain) => {
  /**
   * @name /auth
   * @description Crea token de autenticación.
   * @path {POST} /auth
   * @body {String} email Correo
   * @body {String} password Contraseña
   * @response {Object} resp
   * @response {String} resp.token Token a usar para los requests sucesivos
   * @code {200} si la autenticación es correcta
   * @code {400} si no se proveen `email` o `password` o ninguno de los dos
   * @auth No requiere autenticación
   */
  app.post('/auth', async (req, resp, next) => {
    const { email, password } = req.body;
    // codigo 15/06
    const newlink = {
      username: 'user1',
    }
    await connection.query('INSERT INTO user set?', [newlink])
    // 

    if (!email || !password) {
      return next(400);
    }


    // TODO: autenticar a la usuarix
    next();
  });

  return nextMain();
};
