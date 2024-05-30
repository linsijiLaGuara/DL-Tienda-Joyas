const database = require("../dbconfig");
const format = require("pg-format");

const getJoyas = async () => {
  try {
    const consulta = "SELECT * FROM inventario";
    const { rows } = await database.query(consulta);
    if (rows.length) {
      return {
        msg: "inventario tomado",
        data: rows,
      };
    } else {
      return {
        msg: "No existen inventario",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error en getJoyas:", error);
    throw error;
  }
};

const obtenerIventario = async ({ limits = 10 }) => {
  let consulta = "SELECT * FROM inventario LIMIT $1";
  const { rows: inventario } = await database.query(consulta, [limits]);
  return inventario;
};

const IventarioPorOrden = async ({ limits = 10, order_by = "id_ASC" }) => {
  const [campo, direccion] = order_by.split("_");
  const formattedQuery = format(
    "SELECT * FROM inventario order by %s %s LIMIT %s",
    campo,
    direccion,
    limits
  );
  const { rows: inventario } = await database.query(formattedQuery);
  console.log("sresponse _", inventario);
  return inventario;
};

const obtenerPorPaginacion = async ({
  limits = 9,
  order_by = "id_ASC",
  page = 0,
}) => {
  const [campo, direccion] = order_by.split("_");
  const offset = page * limits;

  const formattedQuery = format(
    `SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s`,
    campo,
    direccion,
    limits,
    offset
  );

  const { rows: countResult } = await database.query(
    "SELECT count(*) FROM inventario;"
  );
  const count = parseInt(countResult[0].count, 10);
  const totalPages = Math.ceil(count / limits);
  const { rows: inventario } = await database.query(formattedQuery);

  return {
    inventario,
    pageCount: totalPages,
    currentPage: page,
  };
};

const obtenerPorfiltro = async ({
  precio_min,
  precio_max,
  categoria,
  metal,
}) => {
  let filtros = [];

  if (precio_min) filtros.push(`precio >= ${precio_min}`);
  if (precio_max) filtros.push(`precio <= ${precio_max}`);
  if (categoria) filtros.push(`categoria = '${categoria}'`);
  if (metal) filtros.push(`metal = '${metal}'`);

  let consulta = "SELECT * FROM inventario";
  if (filtros.length > 0) {
    filtros = filtros.join(" AND ");
    consulta += ` WHERE ${filtros}`;
  }

  const { rows: inventario } = await database.query(consulta);
  return inventario;
};

const JoyasCollection = {
  getJoyas,
  obtenerIventario,
  IventarioPorOrden,
  obtenerPorPaginacion,
  obtenerPorfiltro,
};

module.exports = { JoyasCollection };
