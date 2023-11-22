
import React from 'react';

const Task = ({ task, onToggleTask }) => {
  return (
    <li style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <span style={{ marginRight: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.name}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        style={{ marginRight: '5px' }}
      />
    </li>
  );
};

export default Task;
