const { getStudent } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    res.status(200).json(req.student);
  } catch (err) {
    next(err);
  }
};
