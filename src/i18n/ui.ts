export const defaultLang = "es";

export const ui = {
  en: {
    "meta.title": "Juan P Hernández | Portfolio",
    "meta.description":
      "Software and Computer Systems Engineer. Full-stack web developer.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.role": "Software and Computer Systems Engineer",
    "about.title": "About",
    "about.me": "Me",
    "about.education": "Education",
    "about.bio":
      "I'm passionate about computer science, technology and software development, the area I want to focus on is full-stack web development. I'm always willing and searching to learn anything new, I push myself to improve my skills and problem solving abilities, and I'm a self-taught person. I'm also interested in entrepreneurship and startups.",
    "about.bioHighlight": "full-stack web development",
    "education.school": "Universidad La Salle Bajío",
    "education.degree": "Software and Computer Systems Engineering",
    "education.dates": "August 2021 - July 2025",
    "education.detail":
      "Studying programming, web development, mobile development, database administration, networking, project management.",
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
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.role": "Ingeniero en Sistemas Computacionales y de Software",
    "about.title": "Sobre mí",
    "about.me": "Yo",
    "about.education": "Educación",
    "about.bio":
      "Me apasionan las ciencias computacionales, la tecnología y el desarrollo de software; el área en la que quiero enfocarme es el desarrollo web full-stack. Siempre estoy dispuesto a aprender algo nuevo y me exijo para mejorar mis habilidades y mi capacidad de resolver problemas. Soy autodidacta y también me interesan el emprendimiento y las startups.",
    "about.bioHighlight": "desarrollo web full-stack",
    "education.school": "Universidad La Salle Bajío",
    "education.degree": "Ingeniería en Sistemas Computacionales y de Software",
    "education.dates": "Agosto 2021 - Julio 2025",
    "education.detail":
      "Estudios en programación, desarrollo web, desarrollo móvil, administración de bases de datos, redes y gestión de proyectos.",
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

export function useTranslations(locale: string | undefined) {
  const lang = getLang(locale);
  return (key: Key): string => ui[lang][key] ?? ui[defaultLang][key];
}
