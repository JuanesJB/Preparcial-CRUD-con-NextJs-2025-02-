import { useState, useEffect, useCallback } from 'react';
import { Author, CreateAuthorData, UpdateAuthorData } from '@/types/author';

const API_BASE_URL = 'http://127.0.0.1:8080/api';

export const useAuthors = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAuthors = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/authors`);
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setAuthors(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      console.error('Error fetching authors:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const createAuthor = useCallback(async (authorData: CreateAuthorData): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/authors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authorData),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const newAuthor = await response.json();
      setAuthors(prev => [...prev, newAuthor]);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear autor');
      console.error('Error creating author:', err);
      return false;
    }
  }, []);

  const updateAuthor = useCallback(async (authorData: UpdateAuthorData): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/authors/${authorData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authorData),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const updatedAuthor = await response.json();
      setAuthors(prev => 
        prev.map(author => 
          author.id === authorData.id ? updatedAuthor : author
        )
      );
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar autor');
      console.error('Error updating author:', err);
      return false;
    }
  }, []);

  const deleteAuthor = useCallback(async (id: number): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/authors/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      setAuthors(prev => prev.filter(author => author.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al eliminar autor');
      console.error('Error deleting author:', err);
      return false;
    }
  }, []);

  useEffect(() => {
    fetchAuthors();
  }, [fetchAuthors]);

  return {
    authors,
    loading,
    error,
    fetchAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor,
  };
};
