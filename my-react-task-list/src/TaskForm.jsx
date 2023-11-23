import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    // Validación antes de agregar la tarea
    if (taskName.length >= 3) {
      addTask({
        name: taskName,
        description: taskDescription,
      });

      // Limpiar los campos después de agregar la tarea
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres');
    }
  };

  return (
    <div>
      <h2>Añadir Tarea</h2>
      <form>
        <label>
          Nombre de la Tarea:
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descripción de la Tarea:
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddTask}>
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
