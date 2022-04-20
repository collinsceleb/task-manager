const Task = require("../models/task");


const getAllTasks = (req, res) => {
    res.send("get all tasks");
}

const getTask = (req, res) => {
    // res.send("get task");
    res.json({ id: req.params.id})
}

const createTask =  async (req, res) => {
//   res.send("create task");
    const task = await Task.create(req.body)
    res.status(201).json({ task })
};

const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};





module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}