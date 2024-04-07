// import

const Todo = require("../models/todo");

//define route handler

exports.createTodo = async (req, res) => {
  try {
    //Extract Title and Description from the Request Body
    const { title, description } = req.body;
    //Create a new Todo obj and insert in DB
    const response = await Todo.create({ title, description });

    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: Response,
      message: "Entry Created SuccesFully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.messag,
    });
  }
};
