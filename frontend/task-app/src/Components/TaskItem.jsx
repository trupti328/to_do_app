import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="card custom-card">
      <div className="card-body">
        {/* Task Title */}
        <h6
          className={`card-title fw-bold mb-3 ${
            task.completed ? 'text-decoration-line-through text-muted' : ''
          }`}
        >
          {task.title.length > 40 ? task.title.slice(0, 40) + '...' : task.title}
        </h6>

        {/* Buttons with labels */}
        <div className="d-flex justify-content-end gap-2">
          <button
            className={`btn btn-sm ${task.completed ? 'btn-secondary' : 'btn-success'}`}
            onClick={() => onToggle(task.id)}
            title={task.completed ? 'Undo' : 'Complete'}
          >
            <i className="bi bi-check-circle me-1"></i>
            {task.completed ? 'Undo' : 'Complete'}
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(task.id)}
            title="Delete"
          >
            <i className="bi bi-trash me-1"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
