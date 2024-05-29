const { JoyasCollection } = require("../database/models/dataModels");

const get_joyas_controller = async (req, res, next) => {
  try {
    const response = await JoyasCollection.getJoyas();
    res.send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get_joyas_controller,
};
