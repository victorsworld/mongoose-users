//clients request -> (server)app.js -> router ./routes/todo.js -> controller todocontroller.js -> model (database)ToDo.js -> controller todocontroller.js -> client response

const toDo = require('../model/ToDo');

const getAllToDos = async (req, res) => {
  try {
    const todos = await toDo.find();
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = await new toDo(req.body);
    const saveTodo = await newTodo.save();
    res.status(200).json({ success: true, Data: saveTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const priorityToDo = async (req, res) => {
  try {
    const find = req.params.find;
    const priotodos = await toDo.find({ priority: find });
    if (priotodos === 0)
      return res
        .status(400)
        .json({ success: false, message: 'No todo with this priortity' });
    res.status(200).json({ success: true, Data: priotodos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateToDo = async (req, res) => {
  try {
    const updateToDo = await toDo.findOneAndUpdate({_id: req.params.id}, req.body);
    if(!updateToDo) return res.status(400).json({success: false, message: "ID not found"})
    res.status(200).json({success: true, data: updateToDo});
  } catch (error) {
    res.status(500).json({success:false, message: error.message})
  }
};

const deleteToDo = async (req,res) => {
    try {
        const deleteToDo = await toDo.findByIdAndDelete({_id: req.params.id}, req.body)
        if(!deleteToDo) return res.status(400).json({success: false, message: "Id choice not deleted"})
        res.status(200).json({success: true, data: deleteToDo});
     } catch (error) {
      res.status(500).json({success:false, message: error.message})
     }
}

module.exports = {
    getAllToDos,
    createTodo,
    priorityToDo,
    updateToDo,
    deleteToDo,
  };