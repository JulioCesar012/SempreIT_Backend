const knex = require('knex');
const configuration = require('../../knexfile');

const connectionDB = knex(configuration.production);

module.exports = connectionDB;
