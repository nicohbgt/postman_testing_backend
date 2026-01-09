const tasks = require('../data/task.users');

// CREATE TASK
exports.createTask = (req, res) => {
    const {title} = req.body;

    if (!title) {
        return res.status(400).json({ message : "Title is required"});
    }

    const newTask = {
        id: Date.now(),
        title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json({ message : "Task created successfully", task : newTask});
};

// READ (ALL TASKS)
exports.getTask = (req, res) => {
    res.json({tasks});
};

// UPDATE TASK
exports.updateTask = (req, res) => {
    const {id} = req.params;
    const {title, completed} = req.body;

    const task = tasks.find(task => task.id == id);

    if(!task) {
        return res.status(404).json({ message : "Task not found"});
    }

    if (title) task.title = title;
    if (status) task.status = status;

    res.json({ message : "Task updated", data: task});
};

// DELETE TASK
exports.deleteTask = (req, res) => {
    const {id} = req.params;
    const index = tasks.findIndex(task => task.id == id);

    if(index === -1) {
        return res.status(404).json({ message : "Task not found"});
    }

    task.splice(index, 1);
    res.json({ message : "Task deleted successfully"});
}