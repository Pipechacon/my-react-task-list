
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleTask }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </ul>
  );
};

export default TaskList;
