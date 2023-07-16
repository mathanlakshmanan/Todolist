const mongoose = require("mongoose");

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    assigned_user: String,
    task_date: String,
    task_time: String,
    is_completed: Boolean,
    time_zone: String,
    task_msg: String,
  })
);

module.exports = Task;
