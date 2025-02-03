import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [name, setName] = useState(task?.name || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState(task?.status || 'pending');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('El nombre de la tarea es obligatorio.');
      return;
    }

    const newTask = {
      id: task?.id || Date.now(),
      name: name.trim(),
      description: description.trim(),
      status,
    };

    onSave(newTask);
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">{task ? 'Editar tarea' : 'Agregar tarea'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">Nombre:</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-2">Descripción:</label>
            <textarea
              id="description"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block font-medium mb-2">Estado:</label>
            <select
              id="status"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pendiente</option>
              <option value="completed">Completada</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-md mr-2"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              {task ? 'Guardar cambios' : 'Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default TaskModal;