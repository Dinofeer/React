import React from 'react';

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  return (
    <li className="border border-gray-300 rounded-md p-4 mb-2 flex items-center justify-between">
      <div>
        <h3 className="font-medium">{task.name}</h3>
        <p className="text-gray-500">{task.description}</p>
      </div>
      <div>
        <button
          className="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-medium py-2 px-4 rounded-md mr-2"
          onClick={() => onUpdateTask(task)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md"
          onClick={() => onDeleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;