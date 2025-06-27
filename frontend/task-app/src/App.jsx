import React, { useEffect, useState } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import axios from 'axios';

const API_URL = "http://localhost:3000/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    try {
      await axios.post(API_URL, { title, completed: false });
      fetchTasks();
    } catch (error) {
      console.error("Failed to add task:", error.message);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const task = tasks.find((t) => t.id === id);
      if (!task) return;
      await axios.put(`${API_URL}/${id}`, { completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error("Failed to update task:", error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#fef6e4', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontWeight: 'bold' }}>Todo List</h2>
        <TaskForm onAdd={addTask} />
      </div>

      <h5 style={{ marginBottom: '1rem' }}>All Tasks</h5>
      <TaskList
        tasks={tasks}
        onToggle={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
