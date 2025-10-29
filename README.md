# Entrenapp

Aplicación web pensada para equipos de entrenamiento que necesitan centralizar comunicación, planificación y recursos de sus atletas y entrenadores. Está construida con React + Vite y utiliza Tailwind CSS para el diseño.

## Requisitos
- Node.js 18 o superior
- npm 9 o superior

## Instalación
1. Cloná el repositorio o descargá el código en tu máquina.
2. Instalá las dependencias:
   ```bash
   npm install
   ```

## Scripts disponibles
- `npm run dev`: inicia el entorno de desarrollo en `http://localhost:5173`.
- `npm run build`: genera la versión lista para producción en la carpeta `dist/`.
- `npm run preview`: levanta un servidor local para revisar el build.

## Uso de la aplicación
1. Iniciá el servidor con `npm run dev` y abrí el navegador en la URL indicada.
2. El **Navbar** superior permite navegar entre las secciones principales:
   - `/` – Landing con el bloque **Hero**, la sección interactiva de recursos (`ScrollSection`) y el formulario de acceso para alumnos.
   - `/rutinas` – Vista de rutinas que reutiliza la galería de recursos para explorar planes de entrenamiento.
   - `/calculadora`, `/entrenadores`, `/chat`, `/entrenamientos` – Páginas placeholder listas para completar con funcionalidades específicas.
3. En la página principal encontrarás:
   - **Hero**: presentación de la plataforma con CTA para registrarse.
   - **Sección de procesos (ScrollSection)**: tarjetas informativas con un efecto de blur dinámico que se abre alrededor del cursor.
   - **Tres Disciplinas**: componente animado que muestra ejemplos visuales de bici, pista y natación.
   - **Formulario de login/registro**: acceso para atletas y entrenadores con recordatorio de beneficios.
   - **Bloque de recursos**: tarjetas con artículos destacados e imágenes importadas desde `src/assets/images`.

## Estructura relevante
```
src/
├── components/    # Componentes React reutilizables (Navbar, Hero, ScrollSection, etc.)
├── pages/         # Rutas principales manejadas por React Router
├── assets/        # Imágenes y videos importados desde los componentes
└── styles/        # Estilos adicionales (por ejemplo, button1.css)
```
Los favicons y manifest estáticos viven en `public/` y se copian sin procesar durante el build.

## Personalización rápida
- Actualizá las imágenes de los recursos en `src/assets/images/` y ajustá la data estática definida en los componentes para reflejar tu equipo.
- Modificá el efecto de blur que acompaña al cursor en `src/components/UnicornScene.jsx` si necesitás un estilo distinto.
- Añadí nuevas rutas editando `src/router.jsx` y crea el componente correspondiente en `src/pages/`.

## Deploy
Tras ejecutar `npm run build`, subí el contenido de `dist/` a tu hosting estático preferido (Netlify, Vercel, GitHub Pages, etc.).

---
Cualquier mejora o duda, sentite libre de abrir un issue o seguir iterando sobre los componentes para adaptarlos a tu staff.
