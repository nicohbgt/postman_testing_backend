const tasks = require("../data/tasks");

// CREATE
exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    status: "pending"
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created",
    data: newTask
  });
};

// READ
exports.getTasks = (req, res) => {
  res.status(200).json({
    data: tasks
  });
};

// UPDATE
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;

  const task = tasks.find(t => t.id == id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (title) task.title = title;
  if (status) task.status = status;

  res.json({
    message: "Task updated",
    data: task
  });
};

// DELETE
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.json({ message: "Task deleted" });
};
