const JWT = require("jsonwebtoken");
const createError = require("./createError");
const { Students } = require("../models");

const secret = "GLIERA";

const createToken = (_id) => {
  const token = JWT.sign({ _id }, secret);
  return token;
};

const authMidlvare = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw "err";
    }
    const token = authorization.split(" ")[1];
    const data = JWT.verify(token, secret);
    if (!data._id) {
      throw "err";
    }
    const student = await Students.findById(data._id);
    if (!student) {
      throw "err";
    }
    if (student.token !== token) {
      throw "err";
    }
    req.student = student;
    next();
  } catch (err) {
    next(createError(403, "Auth error"));
  }
};

module.exports = {
  createToken,
  authMidlvare,
};
