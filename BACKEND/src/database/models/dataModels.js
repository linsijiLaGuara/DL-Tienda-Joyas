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

const JoyasCollection = {
  getJoyas,
  obtenerIventario,
};

module.exports = { JoyasCollection };
