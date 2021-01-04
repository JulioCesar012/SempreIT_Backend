const mysql = require('mysql');

const pool = mysql.createPool({
  "host": "localhost",
  "user": "id15827771_juliofilho",
  "password": "%OR$C4zvM*TOL2ZD",
  "database": "id15827771_sempre_it_fullstac",
});

exports.pool = pool;
