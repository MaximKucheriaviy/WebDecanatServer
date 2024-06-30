const express = require("express");
const router = express.Router();
const {
  getStudentController,
  signUpStudentController,
} = require("../controllers");
const { authMidlvare } = require("../service/jwt");

router.get("/", authMidlvare, getStudentController);
router.post("/auth", signUpStudentController);

module.exports = router;
