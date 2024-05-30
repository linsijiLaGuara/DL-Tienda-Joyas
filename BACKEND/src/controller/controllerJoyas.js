const { JoyasCollection } = require("../database/models/dataModels");

const get_joyas_controller = async (req, res, next) => {
  try {
    const response = await JoyasCollection.getJoyas();
    res.send(response);
  } catch (error) {
    next(error);
  }
};
const get_paginated_joyas_controller = async (req, res) => {
  const queryStrings = req.query;
  const inventario = await JoyasCollection.obtenerIventario(queryStrings);
  res.json(inventario);
};

module.exports = {
  get_joyas_controller,
  get_paginated_joyas_controller,
};
