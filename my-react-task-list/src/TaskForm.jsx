import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleAddTask = () => {
    if (task.name.length >= 3) {
      addTask(task);
      setTask({ name: '', description: '' });
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
            name="name"
            value={task.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descripción de la Tarea:
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleInputChange}
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
