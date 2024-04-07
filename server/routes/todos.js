const express = require("express");

const router = express.Router();

//important controller
const { createTodo } = require("../controller/createTodo");
router.post("/createTodo", createTodo);

module.exports = router;
