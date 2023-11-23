import React, { useState, useEffect } from 'react';
import Header from './assets/Header';
import TaskList from './assets/TaskList';
import TaskForm from './TaskForm'; // Importa el nuevo componente

const initialTasks = [
  { id: 1, name: 'Tarea 1', description: 'Descripción 1', completed: false },
  { id: 2, name: 'Tarea 2', description: 'Descripción 2', completed: false },
  { id: 3, name: 'Tarea 3', description: 'Descripción 3', completed: false },
  { id: 4, name: 'Tarea 4', description: 'Descripción 4', completed: false },
  { id: 5, name: 'Tarea 5', description: 'Descripción 5', completed: false },
  { id: 6, name: 'Tarea 6', description: 'Descripción 6', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Efecto para cargar las tareas desde localStorage al iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Función para agregar tarea
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Guardar en localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Función para eliminar tarea
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    // Guardar en localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Función para editar tarea
  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);

    // Guardar en localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Función para cambiar el estado de completado de una tarea
  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Header addTask={addTask} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;
