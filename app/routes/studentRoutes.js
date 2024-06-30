const express = require("express");
const router = express.Router();
const {
  getStudentController,
  signUpStudentController,
  logoutStudentController,
} = require("../controllers");
const { authMidlvare } = require("../service/jwt");

router.get("/", authMidlvare, getStudentController);
router.post("/auth", signUpStudentController);
router.patch("/logout", authMidlvare, logoutStudentController);

module.exports = router;
