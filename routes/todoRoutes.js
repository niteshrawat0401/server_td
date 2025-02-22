const express = require("express");
const { addTodo, getTodo, updateTodo, deleteTodo } = require("../controller/todoController");
const todoRouter = express.Router();

// todo Route
todoRouter.post("/",  addTodo);
todoRouter.get("/",  getTodo);
todoRouter.put("/:id",  updateTodo);
todoRouter.delete("/:id",  deleteTodo);


module.exports = todoRouter;
