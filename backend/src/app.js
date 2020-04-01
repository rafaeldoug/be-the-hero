const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


/**
 * SQL: MySQL, SQLite. PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB etc 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() [KNEX.JS]
 */

module.exports = app;