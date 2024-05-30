const { Pool } = require("pg");

const pool = new Pool({
  user: "lin",
  host: "localhost",
  password: "lin",
  database: "joyas",
  port: 5432,
  allowExitOnIdle: true,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
