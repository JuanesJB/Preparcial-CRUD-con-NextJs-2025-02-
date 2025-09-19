'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuthors } from '@/hooks/useAuthors';
import { Author } from '@/types/author';
import AuthorCard from '@/components/AuthorCard';
import EditAuthorModal from '@/components/EditAuthorModal';

export default function AuthorsPage() {
  const { authors, loading, error, deleteAuthor, updateAuthor } = useAuthors();
  const [editingAuthor, setEditingAuthor] = useState<Author | null>(null);

  const handleEdit = (author: Author) => {
    setEditingAuthor(author);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este autor?')) {
      await deleteAuthor(id);
    }
  };

  const handleUpdate = async (updatedAuthor: Author) => {
    const success = await updateAuthor({
      id: updatedAuthor.id,
      name: updatedAuthor.name,
      birthDate: updatedAuthor.birthDate,
      description: updatedAuthor.description,
      image: updatedAuthor.image,
    });
    if (success) {
      setEditingAuthor(null);
    }
  };

  const handleCloseModal = () => {
    setEditingAuthor(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">Error al cargar datos</p>
            <p>{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Lista de Autores</h1>
            <p className="text-gray-600">Gestiona la información de los autores</p>
          </div>
          <Link
            href="/crear"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            + Crear Autor
          </Link>
        </div>

        {authors.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
              <div className="text-gray-400 text-6xl mb-6">
                <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">No hay autores registrados</h3>
              <p className="text-gray-500 mb-8">Comienza creando tu primer autor</p>
              <Link
                href="/crear"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                + Crear Autor
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {authors.map((author) => (
              <AuthorCard
                key={author.id}
                author={author}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {editingAuthor && (
          <EditAuthorModal
            author={editingAuthor}
            onUpdate={handleUpdate}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}
