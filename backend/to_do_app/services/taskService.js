const { tasks } = require('../model/taskModel');

const getAllTasks = () => tasks;

const createTask = (title, completed = false) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, title, completed };
    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, completed) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = completed;
        return task;
    }
    return null;
};

const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
