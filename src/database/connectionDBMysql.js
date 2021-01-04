const mysql = require('mysql');

const pool = mysql.createPool({
  "host": "localhost",
  "user": "juliofilho",
  "password": "%OR$C4zvM*TOL2ZD",
  "database": "sempre_it_fullstack",
});

exports.pool = pool;
