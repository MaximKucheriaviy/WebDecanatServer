const { logoutStudent } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const student = await logoutStudent(req.student._id);
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
