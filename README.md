# Bookstore Frontend - CRUD de Autores

Aplicación web desarrollada con Next.js, TypeScript y Tailwind CSS que implementa un CRUD completo para gestionar autores de libros.

## Características

- **Lista de Autores**: Visualización de todos los autores registrados
- **Crear Autor**: Formulario para agregar nuevos autores
- **Editar Autor**: Modal para modificar información de autores existentes
- **Eliminar Autor**: Funcionalidad para remover autores de la lista
- **Navegación**: Sistema de rutas con App Router de Next.js
- **Diseño Responsivo**: Interfaz adaptada para diferentes dispositivos

## Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos y diseño
- **React Hooks** - useState, useEffect, useCallback
- **Custom Hooks** - Lógica reutilizable para el CRUD

## Requisitos Previos

1. **Node.js** (versión 18 o superior)
2. **Backend API** ejecutándose en `http://127.0.0.1:8080`

## Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar el Backend con Docker

**IMPORTANTE**: Antes de ejecutar la aplicación frontend, debes tener el backend ejecutándose con Docker.

#### Paso 1: Clonar el repositorio del backend
```bash
git clone https://github.com/isis3710-uniandes/bookstore-back.git
cd bookstore-back
```

#### Paso 2: Construir la imagen Docker
```bash
docker build ./ -t bookstore
```

#### Paso 3: Ejecutar el contenedor
```bash
docker run -d -p 127.0.0.1:8080:8080 bookstore
```

#### Paso 4: Verificar que el backend esté funcionando
Visita: http://127.0.0.1:8080/api/authors

Deberías ver una respuesta JSON con los datos de los autores.

### 3. Ejecutar la Aplicación Frontend

```bash
npm run dev
```

La aplicación estará disponible en: http://localhost:3000

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── authors/
│   │   └── page.tsx          # Página de lista de autores
│   ├── crear/
│   │   └── page.tsx          # Página de creación de autores
│   ├── layout.tsx            # Layout principal con navegación
│   └── page.tsx              # Página de inicio (redirige a /authors)
├── components/
│   ├── AuthorCard.tsx        # Tarjeta individual de autor
│   ├── EditAuthorModal.tsx   # Modal para editar autores
│   └── Navigation.tsx        # Componente de navegación
├── hooks/
│   └── useAuthors.ts         # Custom hook para lógica del CRUD
└── types/
    └── author.ts             # Interfaces TypeScript para Author
```

## 🔧 Funcionalidades Implementadas

### ✅ Lista de Autores (`/authors`)
- Carga automática de datos desde la API
- Visualización en tarjetas responsivas
- Estados de carga y error
- Botones de editar y eliminar

### ✅ Crear Autor (`/crear`)
- Formulario controlado con validación
- Campos: nombre, fecha de nacimiento, descripción, imagen
- Redirección automática tras crear

### ✅ Editar Autor
- Modal con formulario pre-poblado
- Actualización en tiempo real
- Validación de campos

### ✅ Eliminar Autor
- Confirmación antes de eliminar
- Actualización inmediata de la lista

### ✅ Navegación
- App Router de Next.js
- Navegación entre páginas
- Indicador de página activa

## 🎨 Diseño

La aplicación utiliza Tailwind CSS para un diseño moderno y responsivo:

- **Colores**: Paleta azul y gris profesional
- **Tipografía**: Fuentes Geist Sans y Geist Mono
- **Componentes**: Tarjetas, modales, formularios estilizados
- **Responsive**: Adaptado para móviles, tablets y desktop

## 🔍 Custom Hook: useAuthors

El hook `useAuthors` centraliza toda la lógica del CRUD:

```typescript
const {
  authors,        // Lista de autores
  loading,        // Estado de carga
  error,          // Errores
  fetchAuthors,   // Recargar datos
  createAuthor,   // Crear autor
  updateAuthor,   // Actualizar autor
  deleteAuthor    // Eliminar autor
} = useAuthors();
```

## 🚨 Manejo de Errores

- Validación de formularios
- Mensajes de error descriptivos
- Estados de carga
- Confirmaciones para acciones destructivas

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Grid Responsivo**: Adaptación automática del layout
- **Navegación Móvil**: Menú optimizado para pantallas pequeñas

## 🔄 Estado de la Aplicación

- **Estado Local**: useState para formularios y UI
- **Estado Global**: Custom hook para datos de autores
- **Persistencia**: Los datos se mantienen durante la navegación

## 🧪 Pruebas

Para probar la aplicación:

1. Asegúrate de que el backend esté ejecutándose
2. Visita http://localhost:3000
3. Navega entre las diferentes secciones
4. Prueba crear, editar y eliminar autores

## 📝 Notas de Desarrollo

- **TypeScript**: Todo el código está fuertemente tipado
- **Componentes**: Separación clara de responsabilidades
- **Hooks**: Lógica reutilizable y testeable
- **API**: Integración completa con el backend REST

## 🤝 Contribución

Este proyecto fue desarrollado como parte del preparcial de la materia de desarrollo web, implementando todas las funcionalidades requeridas:

- ✅ CRUD completo (Crear, Leer, Actualizar, Eliminar)
- ✅ Manejo de estado con useState
- ✅ Formularios controlados
- ✅ Navegación con App Router de Next.js
- ✅ Custom hook para lógica del CRUD
- ✅ TypeScript para tipado estático
- ✅ Tailwind CSS para estilos
- ✅ Diseño responsivo y moderno