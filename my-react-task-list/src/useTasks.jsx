// app.js

import React, { useState } from 'react';
import useTasks from './hooks/useTasks'; // Importa el gancho personalizado

const initialTasks = [
  { id: 1, name: 'Tarea 1', description: 'Descripción 1', completed: false },
  { id: 2, name: 'Tarea 2', description: 'Descripción 2', completed: false },
  { id: 3, name: 'Tarea 3', description: 'Descripción 3', completed: false },
  { id: 4, name: 'Tarea 4', description: 'Descripción 4', completed: false },
  { id: 5, name: 'Tarea 5', description: 'Descripción 5', completed: false },
  { id: 6, name: 'Tarea 6', description: 'Descripción 6', completed: false },
];

function App() {
  const { tasks, addTask, deleteTask, editTask, toggleTask } = useTasks(initialTasks);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Header addTask={addTask} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;

// useTasks.js

import { useState } from 'react';

const useTasks = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
    toggleTask,
  };
};
