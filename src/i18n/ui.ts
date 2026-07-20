export const defaultLang = "es";

export const ui = {
  en: {
    "meta.title": "Juan P Hernández | Portfolio",
    "meta.description":
      "Software and Computer Systems Engineer. Full-stack web developer.",
    "nav.home": "Home",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.role": "Software and Computer Systems Engineer",
    "about.title": "About",
    "about.education": "Education",
    "about.bio":
      "I'm passionate about computer science, technology and software development, the area I want to focus on is full-stack web development. I'm always willing and searching to learn anything new, I push myself to improve my skills and problem solving abilities, and I'm a self-taught person. I'm also interested in entrepreneurship and startups.",
    "about.bioHighlight": "full-stack web development",
    "education.school": "Universidad La Salle Bajío",
    "education.degree": "Software and Computer Systems Engineering",
    "education.dates": "August 2021 - July 2025",
    "education.detail":
      "Studying programming, web development, mobile development, database administration, networking, project management.",
    "experience.title": "Experience",
    "experience.wicode.role": "Fullstack Developer",
    "experience.wicode.dates": "July 2025 - Present",
    "experience.wicode.b1":
      "Specialized in TypeScript and cloud microservice architectures. My work centers on building REST APIs with Express and Google Cloud Functions, complemented by frontend experience with React/TypeScript.",
    "experience.wicode.b2":
      "Led complex enterprise management projects: ERP systems, dashboards and investor metrics, visual productivity tools, and integration and processing platforms.",
    "experience.wicode.b3":
      "Took part in the full application lifecycle, from requirements specification through production deployment, ensuring scalability, security and performance. Delivering high-quality technical solutions that meet both functional and non-functional requirements, keeping the code maintainable and extensible over the long term.",
    "experience.kiin.role": "IT Assistant",
    "experience.kiin.dates": "April 2024 - February 2025",
    "experience.kiin.b1":
      "Developed and maintained websites with JavaScript and WordPress, chatbot integration, SEO improvements, load time and performance optimization, and UI/UX design and maintenance.",
    "experience.kiin.b2": "Network configuration for photovoltaic inverters.",
    "experience.kiin.b3": "Sales process automation in CRM.",
    "experience.kiin.b4": "Computer equipment maintenance and IT support.",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks / Libraries",
    "skills.software": "Software / Tools / Others",
    "contact.title": "Contact",
    "footer.rights": "All Rights Reserved.",
    "404.title": "404 | Page Not Found",
    "404.heading": "Error 404 :(",
    "404.text": "Page not found",
    "404.back": "Go back home",
    "lang.label": "Language",
  },
  es: {
    "meta.title": "Juan P Hernández | Portafolio",
    "meta.description":
      "Ingeniero en Sistemas Computacionales y de Software. Desarrollador web full-stack.",
    "nav.home": "Inicio",
    "nav.education": "Educación",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.role": "Ingeniero en Sistemas Computacionales y de Software",
    "about.title": "Sobre mí",
    "about.education": "Educación",
    "about.bio":
      "Me apasionan las ciencias computacionales, la tecnología y el desarrollo de software; el área en la que quiero enfocarme es el desarrollo web full-stack. Siempre estoy dispuesto a aprender algo nuevo y me exijo para mejorar mis habilidades y mi capacidad de resolver problemas. Soy autodidacta y también me interesan el emprendimiento y las startups.",
    "about.bioHighlight": "desarrollo web full-stack",
    "education.school": "Universidad La Salle Bajío",
    "education.degree": "Ingeniería en Sistemas Computacionales y de Software",
    "education.dates": "Agosto 2021 - Julio 2025",
    "education.detail":
      "Estudios en programación, desarrollo web, desarrollo móvil, administración de bases de datos, redes y gestión de proyectos.",
    "experience.title": "Experiencia",
    "experience.wicode.role": "Desarrollador Fullstack",
    "experience.wicode.dates": "Julio 2025 - Actualidad",
    "experience.wicode.b1":
      "Especializado en TypeScript y arquitecturas de microservicios en la nube. Mi trabajo se centra en el desarrollo de APIs REST con Express y Google Cloud Functions, complementado con experiencia en frontend con React/TypeScript.",
    "experience.wicode.b2":
      "He liderado proyectos empresariales complejos de gestión como ERP, dashboards y métricas para inversionistas, herramientas de productividad visual, plataformas de integración y procesamiento.",
    "experience.wicode.b3":
      "He participado en el desarrollo completo del ciclo de vida de aplicaciones, desde la especificación de requisitos hasta el deployment en producción, garantizando escalabilidad, seguridad y performance. Entregando soluciones técnicas de alta calidad que satisfagan tanto requisitos funcionales como no funcionales, manteniendo la mantenibilidad y extensibilidad del código en el largo plazo.",
    "experience.kiin.role": "Auxiliar de TI",
    "experience.kiin.dates": "Abril 2024 - Febrero 2025",
    "experience.kiin.b1":
      "Desarrollo y mantenimiento de sitios web con JavaScript y WordPress, integración de chatbot, mejora de SEO, mejora de tiempos de carga y rendimiento, creación y mantenimiento de UI/UX.",
    "experience.kiin.b2":
      "Configuración de redes para inversores fotovoltaicos.",
    "experience.kiin.b3": "Automatización de procesos de ventas en CRM.",
    "experience.kiin.b4":
      "Mantenimiento de equipos de cómputo y soporte de TI.",
    "skills.title": "Habilidades",
    "skills.languages": "Lenguajes",
    "skills.frameworks": "Frameworks / Librerías",
    "skills.software": "Software / Herramientas / Otros",
    "contact.title": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "404.title": "404 | Página no encontrada",
    "404.heading": "Error 404 :(",
    "404.text": "Página no encontrada",
    "404.back": "Volver al inicio",
    "lang.label": "Idioma",
  },
} as const;

export type Lang = keyof typeof ui;
export type Key = keyof (typeof ui)[typeof defaultLang];

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function getTranslations(locale: string | undefined) {
  const lang = getLang(locale);
  return (key: Key): string => ui[lang][key] ?? ui[defaultLang][key];
}
