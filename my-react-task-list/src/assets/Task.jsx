import React, { useState } from 'react';

const Task = ({ task, onToggleTask, onDeleteTask, onEditTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleToggleEditing = () => {
    setEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  const handleSaveEdit = () => {
    onEditTask(task.id, editedTaskName);
    setEditing(false);
  };

  return (
    <li style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {isEditing ? (
        <>
          <input type="text" value={editedTaskName} onChange={handleInputChange} />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ marginRight: '10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            style={{ marginRight: '5px' }}
          />
          <button onClick={handleToggleEditing}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Task;
