const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes');
const niveis = require('./niveisRoutes');
const turmas = require('./turmaRoutes');

module.exports = (app) => {
  app.use(bodyParser.json(), pessoas, niveis, turmas);
};
