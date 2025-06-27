import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'flex-start' // align items to the start
  };

  const cardWrapperStyle = {
    width: 'calc(33.333% - 1rem)', // always 3 per row
    minWidth: '250px' // fallback for small screens
  };

  return (
    <div style={rowStyle}>
      {tasks.map((task) => (
        <div key={task.id} style={cardWrapperStyle}>
          <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
