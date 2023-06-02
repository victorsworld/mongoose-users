var express = require('express');
var router = express.Router();
const { getAllToDos, createTodo, priorityToDo, updateToDo, deleteToDo } = require('../controller/todocontroller');

router.get('/all-todos', getAllToDos);
router.post("/new-todo", createTodo)
router.get("/find-todo/:find", priorityToDo)
router.put('/update-todo/:id', updateToDo)
router.delete('/delete-todo/:id', deleteToDo)

module.exports = router;
