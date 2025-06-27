const taskService = require('../services/taskService');

// GET /tasks
const getAllTasks = (req, res) => {
    const tasks = taskService.getAllTasks();
    res.json(tasks);
};

// POST /tasks
const createTask = (req, res) => {
    const { title, completed } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
    }

    const newTask = taskService.createTask(title.trim(), completed);
    res.status(201).json(newTask);
};

// PUT /tasks/:id
const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { completed } = req.body;

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed must be a boolean.' });
    }

    const updatedTask = taskService.updateTask(id, completed);
    if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    res.json(updatedTask);
};

// DELETE /tasks/:id
const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = taskService.deleteTask(id);

    if (!deleted) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    res.json({ message: 'Task deleted successfully.' });
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
