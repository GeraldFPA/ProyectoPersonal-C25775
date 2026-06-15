# Viaje de una pieza impresa en 3D

Infografía interactiva animada creada con React y Vite para el Proyecto Personal
del curso IF7102 - Multimedios.

## Framework elegido

React. La aplicación usa componentes reutilizables, props, estado reactivo,
eventos de clic, ciclo de vida con `useEffect` y carga de datos desde JSON con
`fetch()`.

## Opción del proyecto

Opción 2: Infografía Interactiva Animada.

La infografía muestra el recorrido de una pieza impresa en 3D:

- Idea
- Diseño CAD
- Laminado
- Impresión
- Limpieza
- Producto terminado

Cada etapa incluye título, descripción, imagen SVG, ícono SVG animado, datos
clave y narración activada por interacción.

## Requisitos cubiertos

- React como framework JavaScript.
- Más de 4 componentes reutilizables: `Header`, `Timeline`, `TimelineNode`,
  `StageCard`, `StageIcon` y `AudioPlayer`.
- Datos cargados dinámicamente desde `public/data/stages.json` usando `fetch()`.
- Estado reactivo para controlar la etapa activa.
- Eventos `click` en los nodos de la línea de tiempo.
- SVG con animaciones CSS e interacción por hover/focus.
- Narración por sección mediante clips locales `.wav` desde el componente
  reutilizable `AudioPlayer`.
- Diseño responsive para escritorio y móvil.

## Instalación y ejecución

```bash
pnpm install
pnpm run dev
```

Luego abre la URL local que muestra Vite en la terminal.

## Scripts disponibles

```bash
pnpm run dev
pnpm run build
pnpm run preview
pnpm run lint
```

## Estructura principal

```text
public/data/stages.json     Datos de la infografía
src/components/             Componentes reutilizables de React
src/assets/img/             Imágenes SVG de cada etapa
src/App.jsx                 Carga de datos y estado principal
src/App.css                 Diseño responsive y animaciones
```


