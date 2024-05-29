const database = require("../dbconfig");

const getJoyas = async () => {
  try {
    const consulta = "SELECT * FROM inventario";
    const { rows } = await database.query(consulta);
    if (rows.length) {
      return {
        msg: "Post tomado",
        data: rows,
      };
    } else {
      return {
        msg: "No existen posts",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error en geJoyas:", error);
    throw error;
  }
};
const JoyasCollection = {
  getJoyas,
};

module.exports = { JoyasCollection };
