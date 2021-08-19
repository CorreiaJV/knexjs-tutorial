const knex = require('knex');
const knexfile = require('./knexfile');

// TODO in production, use dependency injection
// to create knex instance so db acess can be mocked for test

//TODO in prod don't acess knexfile.developmente directly
// but decide with env vars which config to use 

const db = knex(knexfile.development);

module.exports = db;
