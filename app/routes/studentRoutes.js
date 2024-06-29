const express = require("express");
const router = express.Router();
const { getStudentController } = require("../controllers");

router.get("/:id", getStudentController);

module.exports = router;
