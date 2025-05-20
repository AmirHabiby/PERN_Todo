const Pool = require("pg").Pool;

/* This imports the Pool class from the pg(node-postgress) library 
   A pool is a collection of database connections that can be reused improving performance*/

const pool = new Pool({
  user: "postgres",
  password: "123456^%$#@!",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
