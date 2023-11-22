import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, onEditTask }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
