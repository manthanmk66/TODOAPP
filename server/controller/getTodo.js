// import

const Todo = require("../models/todo");

//define route handler

exports.getTodo = async (req, res) => {
  try {
    //Fetch all
    const todos = await Todo.find({});

    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data fOUND",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data succesfully fetched`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
