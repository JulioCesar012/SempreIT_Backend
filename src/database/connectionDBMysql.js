const mysql = require('mysql');

const pool = mysql.createPool({
 "host": "mysql-17812-0.cloudclusters.net",
  "user": "juliofilho",
  "password": "sempreit2021",
  "database": "sempreitfullstack",
  "port": "17812"
});

exports.pool = pool;
