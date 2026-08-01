export const PROJECTS = [
  {
    id: 0,
    title: "Portafolio Profesional (Este sitio)",
    description: "Portafolio web personal desarrollado con React y Vite, diseñado con un tema oscuro moderno y totalmente responsive. Incluye animaciones suaves, navegación fluida y secciones optimizadas para destacar proyectos, experiencia y habilidades técnicas.",
    technologies: ["React", "Vite", "CSS3", "React Icons", "React Scroll"],
    github: "https://github.com/bryan0060/portafolio-bryan-arias-rios",
    type: "frontend",
    featured: true
  },
  {
    id: 3,
    title: "Geo-Notas Realtime",
    description: "Mapa interactivo en tiempo real construido con React y Supabase. Los usuarios pueden ver notas geolocalizadas sin necesidad de login, y crear notas o reaccionar a ellas si están autenticados. Implementa sincronización en tiempo real vía WebSockets (Supabase Realtime), autenticación, y un sistema de diseño visual propio con MapLibre GL JS.",
    technologies: ["React", "Vite", "Supabase", "MapLibre GL JS", "Tailwind CSS", "Framer Motion"],
    demo: "https://geo-notas.vercel.app/",
    github: "https://github.com/bryan0060/geo-notas",
    type: "fullstack",
    featured: true,
    isFullStack: false
  },
  {
    id: 2,
    title: "Sistema de Recursos Humanos",
    description: "Sistema Full Stack completo para la gestión de empleados con arquitectura frontend-backend separada. Implementa operaciones CRUD, validaciones, y una API RESTful robusta con Django. El frontend consume la API de forma eficiente con React.",
    technologies: ["React", "Django REST Framework", "Python", "CSS", "API REST"],
    demo: "https://rh-frontend-three.vercel.app/",
    github: "https://github.com/bryan0060/rh_frontend",
    githubBackend: "https://github.com/bryan0060/rh_django_backend",
    apiUrl: "https://rh-backend-u3db.onrender.com/api/empleados",
    type: "fullstack",
    featured: true,
    isFullStack: true
  }
];

export const PROJECT_TYPES = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile"
};