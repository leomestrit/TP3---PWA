# ⚽ Ascenso Neuquino — Proyecto Integrador (TP3)

Plataforma web comunitaria desarrollada para la materia **Programación Web Avanzada**, destinada a la publicación, descubrimiento y consulta de partidos, fixtures y encuentros del fútbol regional de la provincia del Neuquén y las categorías de ascenso de Argentina.

---

## 🚀 Descripción del Proyecto
Este proyecto forma parte del **Trabajo Práctico N.º 3**, donde se inicia el desarrollo de un producto integrador incremental que continuará ampliándose en las siguientes entregas de la materia[cite: 1]. La aplicación está construida utilizando **React**, componentes funcionales modernos, manejo de estados locales (`useState`), renderizado dinámico de listas y un diseño visual completamente adaptable (*responsive*) diseñado mediante **Tailwind CSS**[cite: 1].

---

## ✨ Características y Funcionalidades Implementadas
- **Identidad Visual Propia:** Diseño personalizado enfocado en la temática de fútbol patagónico y del ascenso, con paleta de colores y componentes estéticos consistentes.
- **Estructura Modular por Componentes:** Organización limpia y escalable en `src/components/` (`Header`, `Hero`, `CategoryList`, `CategoryCard`, `SearchBar`, `EventList`, `EventCard`, `Footer`)[cite: 1].
- **Modelo de Datos Local:** Arreglo estructurado de partidos con propiedades completas (`id`, `title`, `description`, `category`, `date`, `location`, `image`, `price`)[cite: 1].
- **Filtrado Dinámico por Categorías:** Sistema interactivo mediante `useState` para alternar entre categorías (LIFUNE A, LIFUNE B, Torneo Regional Federal, Torneo Federal A) incluyendo la opción **"Todos"**[cite: 1].
- **Búsqueda en Tiempo Real:** Campo de búsqueda interactivo que filtra los eventos por nombre, estadio o descripción sin distinción de mayúsculas y minúsculas.
- **Combinación de Filtros:** Filtrado simultáneo y reactivo entre la categoría seleccionada y el texto ingresado en el buscador.
- **Estado Vacío (Sin Resultados):** Mensaje visual informativo adaptado cuando ningún evento coincide con los criterios de búsqueda.
- **Diseño Responsive:** Adaptación fluida a dispositivos móviles, tablets y computadoras de escritorio mediante grillas flexibles de Tailwind CSS.

---

## 📂 Estructura del Proyecto

```text
src/
├── components/
│   ├── CategoryCard.jsx
│   ├── CategoryList.jsx
│   ├── EventCard.jsx
│   ├── EventList.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── SearchBar.jsx
├── data/
│   └── events.js
├── App.jsx
├── main.jsx
└── index.css
```
---

## Tecnologías y Herramientas Utilizadas
    React (Vite) — Biblioteca de JavaScript para la construcción de interfaces de usuario.
    Tailwind CSS — Framework de CSS utilitario para diseño moderno y responsive.
    JavaScript (ES6+) — Lógica de componentes, props, hooks (useState) y métodos de arreglos (map, filter).
    Git / GitHub — Control de versiones.

---

## ⚙️ Instrucciones de Instalación y Ejecución local

    Para poner en marcha el proyecto en tu entorno local, seguí estos pasos:

    Cloná el repositorio: git clone https://github.com/leomestrit/TP3---PWA.git

    Entrá a la carpeta del proyecto:

    cd "TP3 - PWA"

    Instalá las dependencias:

    npm install

    Iniciá el servidor de desarrollo:

    npm run dev

    Abrí tu navegador y ingresá a la dirección local provista por Vite (por lo general http://localhost:5173/).   

---


## 👨‍💻 Autor / Estudiante : LEONARDO MESTRITUA
Materia: Programación Web Avanzada
Proyecto: TP3 - React + Tailwind CSS (Proyecto Integrador)[cite: 1]