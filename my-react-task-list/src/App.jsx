// src/App.jsx
import React, { useState } from 'react';
import Header from './assets/Header';
import TaskList from './assets/TaskList';

const initialTasks = [
  { id: 1, name: 'Tarea 1', completed: false },
  { id: 2, name: 'Tarea 2', completed: false },
  { id: 3, name: 'Tarea 3', completed: false },
  { id: 4, name: 'Tarea 4', completed: false },
  { id: 5, name: 'Tarea 5', completed: false },
  { id: 6, name: 'Tarea 6', completed: false },
  
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Header />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
