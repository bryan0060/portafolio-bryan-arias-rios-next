import { 
  FaReact, 
  FaAngular, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';

import { 
  SiTypescript, 
  SiJavascript, 
  SiDjango, 
  SiFirebase,
  SiIonic,
  SiMysql,
  SiMongodb,
  SiVercel,
  SiRender,
  SiNetlify,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiSupabase,
  SiMicrosoftsqlserver,
  SiFastapi,
  SiFlutter,
  SiVite
} from 'react-icons/si';

export const TECH_STACK = {
  frontend: [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#4b4b4b" },
    {name: "Vitejs", icon: SiVite, color: "#646CFF"},
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }
  ],
  
  backend: [
    { name: "Django REST", icon: SiDjango, color: "#0f553a" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Node.js", icon: FaNode, color: "#339933" },
    { name: "FastAPI", icon: SiFastapi, color: "#00938D" }
  ],
  
  mobile: [
    { name: "Ionic", icon: SiIonic, color: "#3880FF" },
    { name: "Flutterflow", icon: SiFlutter, color: "#02569B" }
  ],
  
  databases: [
    { name: "Firestore", icon: SiFirebase, color: "#FFCA28" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "SQL Server", icon: FaDatabase, color: "#CC2927" }
  ],
  
  tools: [
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#707070" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "Render", icon: SiRender, color: "#46E3B7" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" }
  ]
};

export const LEARNING_AREAS = [
  {
    title: "IA Engineering",
    description: "Fundamentos de inteligencia artificial aplicada al desarrollo de software",
    status: "En progreso"
  },
  {
    title: "Cloud Computing",
    description: "Implementación y administración de servicios e infraestructura en la nube",
    status: "En progreso"
  },
  {
    title: "Soluciones Inteligentes",
    description: "Integración de IA en aplicaciones web para mejorar la experiencia del usuario",
    status: "En progreso"
  }
];