'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthors } from '@/hooks/useAuthors';
import { CreateAuthorData } from '@/types/author';

export default function CreateAuthorPage() {
  const router = useRouter();
  const { createAuthor, error } = useAuthors();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CreateAuthorData>({
    name: '',
    birthDate: '',
    description: '',
    image: '',
  });

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
      const success = await createAuthor(formData);
      if (success) {
        router.push('/authors');
      }
    } catch (error) {
      console.error('Error creating author:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <Link
              href="/authors"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 group transition duration-200"
            >
              <div className="bg-blue-100 group-hover:bg-blue-200 rounded-full p-2 mr-3 transition duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              Volver a la lista
            </Link>
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-3">Nuevo Autor</h1>
              <p className="text-xl text-gray-600">Agrega un nuevo autor a la biblioteca</p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-3">
                  Nombre del Autor *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Gabriel García Márquez"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900 text-lg transition duration-200"
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
                  rows={4}
                  placeholder="Escritor colombiano, premio Nobel de Literatura en 1982..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-900 text-lg transition duration-200 resize-none"
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
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-gray-600 font-medium">
                    Opcional - URL directa de una imagen (debe terminar en .jpg, .png, .gif, etc.)
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-xs text-blue-800 font-semibold mb-1">Ejemplos de URLs válidas:</p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• https://httpbin.org/image/jpeg</li>
                      <li>• https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop</li>
                      <li>• https://picsum.photos/300/200</li>
                    </ul>
                  </div>
                  <p className="text-xs text-red-600 font-medium">
                    ❌ No uses URLs de páginas web (como https://unsplash.com/photos/...)
                  </p>
                  {formData.image && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-700 font-semibold mb-2">Vista previa:</p>
                      <div className="border-2 border-gray-200 rounded-lg overflow-hidden w-32 h-32 bg-gray-100 flex items-center justify-center">
                        <img
                          src={formData.image}
                          alt="Vista previa"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="text-red-500 text-xs text-center p-2">❌ Error al cargar imagen</div>';
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <Link
                  href="/authors"
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg text-center transition duration-200 shadow-md hover:shadow-lg"
                >
                  Cancelar
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                >
                  {isSubmitting ? 'Creando...' : 'Crear Autor'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
