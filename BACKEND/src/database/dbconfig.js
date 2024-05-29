const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
  user: "lin",
  host: "localhost",
  password: "lin",
  database: "joyas",
  port: 5432,
  allowExitOnIdle: true,
});
