const { Students } = require("../models");
const createError = require("../service/createError");

module.exports = async (id) => {
  const student = await Students.findByIdAndUpdate(id, { token: "" });
  if (!student) {
    throw createError(400, "No such student");
  }
  return student;
};
