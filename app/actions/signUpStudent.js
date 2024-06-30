const { Students } = require("../models");
const createError = require("../service/createError");
const { createToken } = require("../service/jwt");

module.exports = async (ticketCode) => {
  if (ticketCode === "") {
    throw createError(400, "No such student");
  }
  const student = await Students.findOne({ ticketCode });
  if (!student) {
    throw createError(400, "No such student");
  }
  const token = createToken(student._id);
  student.token = token;
  await student.save();
  return token;
};
