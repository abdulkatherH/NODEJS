const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });
// ----------------------------------------------
// localStorage
// ----------------------------------------------
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "Admin@123",
    port: "5432",
  });

module.exports = pool;
