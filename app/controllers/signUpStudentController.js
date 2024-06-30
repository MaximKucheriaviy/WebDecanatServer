const { signUpStudent } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { ticketCode } = req.body;
    const token = await signUpStudent(ticketCode);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
