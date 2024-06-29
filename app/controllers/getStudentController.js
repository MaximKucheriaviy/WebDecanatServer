const { getStudent } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await getStudent(id);
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
