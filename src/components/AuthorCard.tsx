import { Author } from '@/types/author';

interface AuthorCardProps {
  author: Author;
  onEdit: (author: Author) => void;
  onDelete: (id: number) => void;
}

export default function AuthorCard({ author, onEdit, onDelete }: AuthorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
        {author.image ? (
          <img
            src={author.image}
            alt={author.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const fallbackDiv = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
              if (fallbackDiv) {
                target.style.display = 'none';
                fallbackDiv.classList.remove('hidden');
              }
            }}
          />
        ) : null}
        <div className={`text-gray-400 fallback-icon ${author.image ? 'hidden' : ''}`}>
          <svg className="w-20 h-20 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {author.image && (
            <p className="text-xs text-red-500 mt-2 text-center px-2">
              Error al cargar imagen
            </p>
          )}
        </div>
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-1">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{author.name}</h3>
        <div className="mb-4">
          <p className="text-gray-800 text-sm mb-2">
            <span className="font-semibold text-gray-900">Nacimiento:</span>{' '}
            {new Date(author.birthDate).toLocaleDateString('es-ES')}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {author.description}
          </p>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => onEdit(author)}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(author.id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
