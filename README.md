Aquí tienes una versión más resumida y con tono más natural, como si lo hubiera escrito un estudiante universitario (sin emojis, menos repetición, más directo):

---

# Bookstore Frontend - CRUD de Autores

Aplicación web en **Next.js, TypeScript y Tailwind CSS** que implementa un CRUD para gestionar autores de libros.

## Funcionalidades

* Listar autores
* Crear nuevos registros
* Editar información en un modal
* Eliminar autores con confirmación
* Navegación con App Router
* Diseño responsivo

## Tecnologías

* Next.js 15
* TypeScript
* Tailwind CSS
* React Hooks y custom hooks

## Requisitos

* **Node.js 18+**
* Backend activo en `http://127.0.0.1:8080`

## Instalación

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

## Estructura del Proyecto

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

## Notas de Desarrollo

* CRUD completo integrado al backend
* Formularios controlados y validados
* Manejo de estado con React y custom hooks
* Tailwind CSS para estilos y diseño responsivo
* Proyecto realizado como parte del curso de desarrollo web

---

¿Quieres que lo deje todavía más breve (como un README de 1 minuto de lectura) o prefieres mantener este nivel de detalle intermedio?
