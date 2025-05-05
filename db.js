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
// -------------------------------
// AWS DATABASE
// -------------------------------
// const pool = new Pool({
//   user: "postgres",
//   host: "aws-rds-333.ct00icgkc3kr.ap-south-1.rds.amazonaws.com",
//   database: "postgres",
//   password: "Iwillwin100%",
//   port: "5432",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
module.exports = pool;