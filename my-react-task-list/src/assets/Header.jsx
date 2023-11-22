import React, { useState } from 'react';

const Header = ({ addTask }) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleInputChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      addTask(newTaskName);
      setNewTaskName('');
    }
  };

  return (
    <header style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h1>My React Task List</h1>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={newTaskName}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </header>
  );
};

export default Header;
