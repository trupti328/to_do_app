import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
    setShowForm(false);
  };

  return (
    <>
      {!showForm ? (
        <button
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            fontSize: '1.25rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
          onClick={() => setShowForm(true)}
        >
          ➕ Add
        </button>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              padding: '0.75rem',
              fontSize: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default TaskForm;
