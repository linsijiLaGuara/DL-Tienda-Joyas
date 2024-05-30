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

const get_orden_joyas_controller = async (req, res) => {
  const queryStrings = req.query;
  const inventario = await JoyasCollection.IventarioPorOrden(queryStrings);
  res.json(inventario);
};

const get_pagina_joyas_controller = async (req, res) => {
  try {
    const { limit, order_by, page } = req.query;

    const paginationResult = await JoyasCollection.obtenerPorPaginacion({
      limits: Number(limit),
      order_by,
      page: Number(page),
    });

    res.json(paginationResult);
  } catch (error) {
    console.error("Error en get_pagina_joyas_controller:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

const get_filtro_joyas_controller = async (req, res) => {
  const queryStrings = req.query;
  const inventario = await JoyasCollection.obtenerPorfiltro(queryStrings);
  res.json(inventario);
};
module.exports = {
  get_joyas_controller,
  get_paginated_joyas_controller,
  get_orden_joyas_controller,
  get_pagina_joyas_controller,
  get_filtro_joyas_controller,
};
