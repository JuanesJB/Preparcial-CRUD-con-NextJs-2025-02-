'use client';

import { useState, useEffect } from 'react';
import { Author } from '@/types/author';

interface EditAuthorModalProps {
  author: Author;
  onUpdate: (author: Author) => void;
  onClose: () => void;
}

export default function EditAuthorModal({ author, onUpdate, onClose }: EditAuthorModalProps) {
  const [formData, setFormData] = useState({
    name: author.name,
    birthDate: author.birthDate.split('T')[0], // Aqui me encargi de convertir a formato YYYY-MM-DD
    description: author.description,
    image: author.image,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const updatedAuthor: Author = {
        ...author,
        ...formData,
        birthDate: new Date(formData.birthDate).toISOString(),
      };
      
      await onUpdate(updatedAuthor);
    } catch (error) {
      console.error('Error updating author:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Editar Autor</h2>
              <p className="text-gray-600 mt-1">Modifica la información del autor</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-3xl p-2 hover:bg-gray-100 rounded-full transition duration-200"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-3">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg transition duration-200"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <label htmlFor="birthDate" className="block text-lg font-semibold text-gray-800 mb-3">
                Fecha de nacimiento *
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg transition duration-200"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-3">
                Descripción *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 text-lg transition duration-200 resize-none"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <label htmlFor="image" className="block text-lg font-semibold text-gray-800 mb-3">
                URL de imagen
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900 text-lg transition duration-200"
              />
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
              >
                {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
