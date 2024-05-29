const express = require("express");
const routes = require("./router/routerJoyas");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
app.use("/api", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Error interno del servidor" });
});

module.exports = app;
