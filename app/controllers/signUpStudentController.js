const { signUpStudent } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { ticketCode } = req.body;
    const { token, name, sername, secondName, subjects, course, level } =
      await signUpStudent(ticketCode);
    res
      .status(200)
      .json({ token, name, sername, secondName, subjects, course, level });
  } catch (err) {
    next(err);
  }
};
