export const PROJECTS = [
  {
    id: 0,
    title: "Portafolio Profesional (Este sitio)",
    description: "Portafolio web personal desarrollado con Next.js y TypeScript, diseñado con un tema oscuro moderno y totalmente responsive. Incluye animaciones suaves, navegación fluida y secciones optimizadas para destacar proyectos, experiencia y habilidades técnicas.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "React Icons"],
    github: "https://github.com/bryan0060/portafolio-bryan-arias-rios-next",
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
  },
  {
    id: 4,
    title: "Chatbot con IA — Asistente del Portafolio",
    description: "Chatbot integrado en este portafolio que responde preguntas sobre mi perfil profesional, experiencia y proyectos usando un LLM (Gemini). El contenido profesional vive en un archivo público del repo, mientras que las instrucciones de comportamiento del bot se manejan por separado como variable de entorno. Detecta el idioma del usuario y responde en consecuencia.",
    technologies: ["Next.js", "TypeScript", "Gemini API", "React"],
    github: "https://github.com/bryan0060/portafolio-bryan-arias-rios-next",
    type: "fullstack",
    featured: true,
    isFullStack: false
  }
];

export const PROJECT_TYPES = {
  fullstack: "Full Stack",
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile"
};