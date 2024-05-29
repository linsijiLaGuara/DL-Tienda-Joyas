const { Pool } = require("pg");

const pool = new Pool({
  user: "lin",
  host: "localhost",
  password: "lin",
  database: "joyas",
  port: 5432,
  allowExitOnIdle: true,
});
