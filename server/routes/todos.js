const express = require("express");

const router = express.Router();

//important controller
const { createTodo } = require("../controller/createTodo");
const { getTodo } = require("../controller/getTodo");
const { getTodoById } = require("../controller/getTodo");
const { updateTodoById } = require("../controller/updateTodo");
const { deleteTodo } = require("../controller/deleteTodo");





router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodoById);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
