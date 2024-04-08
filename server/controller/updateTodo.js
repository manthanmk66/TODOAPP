const Todo = require("../models/todo");

exports.updateTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() },
      { new: true } // to return the updated document
    );
    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
