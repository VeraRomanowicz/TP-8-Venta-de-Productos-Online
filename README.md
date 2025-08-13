# TechStore - Tienda de Productos Tecnológicos

Una aplicación web moderna de comercio electrónico construida con React, Vite y Tailwind CSS, inspirada en sitios como Apple, Samsung y Xiaomi.

## 🚀 Características

### Funcionalidades Principales
- **Navegación Completa**: React Router DOM v6+ con rutas dinámicas
- **API Integration**: Consumo de Fake Store API para productos y categorías
- **Filtros Avanzados**: Búsqueda, filtrado por categoría, precio y ordenamiento
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Componentes Reutilizables**: Arquitectura modular y escalable

### Páginas Implementadas
- **Home**: Hero section, categorías destacadas, productos en oferta
- **Productos**: Lista con filtros, búsqueda y ordenamiento
- **Detalle de Producto**: Información completa, selector de cantidad, carrito
- **Quienes Somos**: Historia de la empresa, valores y equipo
- **Contacto**: Formulario funcional e información de contacto

### Características Técnicas
- **Estado Global**: useState y useEffect para manejo de estado
- **Rutas Dinámicas**: `:idCategoria` y `:idProducto` para navegación
- **Categorías Dinámicas**: Cargadas desde la API en el navbar
- **Diseño Moderno**: Inspirado en Apple, Samsung, Xiaomi
- **Animaciones**: Transiciones suaves y efectos hover
- **SEO Friendly**: Estructura semántica y meta tags

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Routing**: React Router DOM 7.7.1
- **Styling**: Tailwind CSS
- **API**: Fake Store API (https://fakestoreapi.com)
- **Icons**: Heroicons (SVG)
- **Animations**: CSS Transitions y Keyframes

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd TP-8-Venta-de-Productos-Online
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.jsx      # Header con logo y búsqueda
│   ├── Navbar.jsx      # Navegación con categorías dinámicas
│   ├── Footer.jsx      # Footer con información de contacto
│   └── CardProducto.jsx # Tarjeta de producto reutilizable
├── layouts/            # Layouts de la aplicación
│   └── MainLayout.jsx  # Layout principal con Header, Navbar, Footer
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal
│   ├── Productos.jsx   # Lista de productos con filtros
│   ├── ProductoDetalle.jsx # Detalle de producto individual
│   ├── QuienesSomos.jsx # Página sobre la empresa
│   └── Contacto.jsx    # Página de contacto
├── App.jsx             # Componente principal con rutas
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales con Tailwind
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Azul (#2563eb) - Confianza y tecnología
- **Secundario**: Púrpura (#7c3aed) - Innovación
- **Neutro**: Grises para texto y fondos
- **Acentos**: Amarillo para ratings, verde para éxito

### Tipografía
- **Fuente Principal**: Inter (sistema)
- **Jerarquía**: Títulos grandes, texto legible
- **Responsive**: Tamaños adaptativos

### Componentes de UI
- **Cards**: Sombras suaves, hover effects
- **Botones**: Estados hover, loading, disabled
- **Formularios**: Validación visual, focus states
- **Navegación**: Dropdown animado, breadcrumbs

## 🔧 Funcionalidades Implementadas

### Navegación
- ✅ Rutas con parámetros dinámicos
- ✅ Breadcrumbs en detalle de producto
- ✅ Navegación activa destacada
- ✅ Dropdown de categorías dinámico

### Productos
- ✅ Lista completa con paginación
- ✅ Filtros por categoría, precio, búsqueda
- ✅ Ordenamiento por nombre, precio, rating
- ✅ Detalle completo con imágenes y especificaciones
- ✅ Selector de cantidad
- ✅ Simulación de carrito

### API Integration
- ✅ Categorías desde `/products/categories`
- ✅ Productos desde `/products`
- ✅ Detalle desde `/products/:id`
- ✅ Manejo de errores y loading states

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Grid adaptativo
- ✅ Navegación móvil

## 🚀 Características Extra (Opcionales)

### Implementadas
- ✅ **Filtros Avanzados**: Múltiples criterios de búsqueda
- ✅ **Buscador**: Búsqueda en tiempo real
- ✅ **Carrito Ficticio**: Simulación de funcionalidad
- ✅ **Animaciones**: Transiciones suaves
- ✅ **Loading States**: Skeleton loaders
- ✅ **Error Handling**: Manejo de errores de API

### Futuras Mejoras
- 🔄 **Carrito Real**: Context API o Redux
- 🔄 **Autenticación**: Login/Registro
- 🔄 **Pagos**: Integración con pasarelas
- 🔄 **Wishlist**: Lista de deseos
- 🔄 **Reviews**: Sistema de reseñas
- 🔄 **PWA**: Progressive Web App

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Objetivos Cumplidos

### Requisitos Técnicos ✅
- [x] React Router DOM v6+
- [x] useState y useEffect
- [x] Rutas con parámetros :idCategoria y :idProducto
- [x] Navbar con categorías dinámicas desde API
- [x] MainLayout con Header, Navbar, Footer
- [x] Navegación completa (Home, Quienes Somos, Productos, Contacto)

### Diseño ✅
- [x] Inspirado en Apple, Samsung, Xiaomi
- [x] Colores coherentes y tipografía clara
- [x] Diseño responsive
- [x] Imágenes e íconos alineados
- [x] Espaciado adecuado

### Funcionalidades ✅
- [x] Filtros adicionales
- [x] Buscador de productos
- [x] Carrito ficticio
- [x] Animaciones ligeras
- [x] Código limpio y comentado
- [x] Componentes reutilizables

## 🌐 API Endpoints Utilizados

- `GET /products/categories` - Lista de categorías
- `GET /products` - Lista de productos
- `GET /products/:id` - Detalle de producto
- `GET /products?limit=6` - Productos destacados

## 📄 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de producción
- `npm run lint` - Linting del código

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**TechStore Team**
- Email: info@techstore.com
- Website: https://techstore.com

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
