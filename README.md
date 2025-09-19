## Preparcial (20%) – CRUD con NextJs

## Bookstore Frontend - CRUD de Autores

Aplicación web para Programacion con tecnologias WEB en **Next.js, TypeScript y Tailwind CSS** que implementa un CRUD para gestionar autores de libros.

## Que Funcionalidades ya tenemos : 

* Listar autores
* Crear nuevos registros
* Editar información en un modal
* Eliminar autores con confirmación
* Navegación con App Router
* Diseño responsivo

## Las Tecnologías que usamos son :

* Next.js 15
* TypeScript
* Tailwind CSS
* React Hooks y custom hooks

## LosRequisitos para que todo funcione : 

* **Node.js 18+**
* Backend activo en `http://127.0.0.1:8080`

## Para hacer la Instalación necesitamos :

1. Instalar dependencias:

   ```bash
   npm install
   ```
2. Clonar y ejecutar el backend con Docker:

   ```bash
   git clone https://github.com/isis3710-uniandes/bookstore-back.git
   cd bookstore-back
   docker build ./ -t bookstore
   docker run -d -p 127.0.0.1:8080:8080 bookstore
   ```

   Verificar en: [http://127.0.0.1:8080/api/authors](http://127.0.0.1:8080/api/authors)
3. Correr el frontend:

   ```bash
   npm run dev
   ```

   Disponible en: [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto que planteamos : 

```
src/
├── app/
│   ├── authors/         # Lista de autores
│   ├── crear/           # Crear autores
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Inicio
├── components/          # Tarjetas, modales, navegación
├── hooks/               # useAuthors (lógica CRUD)
└── types/               # Interfaces TypeScript
```

## Notas para cumplir con los requisitos del enunciado / el correo que enviaron con aclaraciones : 

* CRUD completo integrado al backend
* Formularios controlados y validados
* Manejo de estado con React y custom hooks
* Tailwind CSS para estilos y diseño responsivo
* Proyecto realizado como parte del curso de desarrollo web
