export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Bookstore</h3>
            <p className="text-gray-400">by Juan Jiménez</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm">
              © 2025 Juan Esteban Jiménez B. Todos los derechos reservados. Universidad de los Andes. Programacion con tecnologias WEB.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Aplicación CRUD desarrollada con Next.js, TypeScript y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
