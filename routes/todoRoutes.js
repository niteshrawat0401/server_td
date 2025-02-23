const express = require("express");
const { addTodo, getTodo, updateTodo, deleteTodo } = require("../controller/todoController");
const { authentication } = require("../middleware/jwt");
const todoRouter = express.Router();

// todo Route
todoRouter.post("/", authentication, addTodo);
todoRouter.get("/", authentication, getTodo);
todoRouter.put("/:id", authentication, updateTodo);
todoRouter.delete("/:id", authentication, deleteTodo);


module.exports = todoRouter;
