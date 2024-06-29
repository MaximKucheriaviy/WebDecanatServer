const { Students } = require("../models");
const createError = require("../service/createError");

module.exports = async (id) => {
  const student = await Students.findById(id);
  if (!student) {
    throw createError(400, "No such student");
  }
  return student;
};
