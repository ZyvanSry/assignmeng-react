
  function randomProgress(min = 20, max = 95) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const skills = [
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Bootstrap",
      "Basic UI/UX",
    ],
    progress: Array(7).fill().map(() => randomProgress()),
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "Authentication Basics",
      "Middleware",
    ],
    progress: Array(6).fill().map(() => randomProgress()),
  },
  {
    category: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Basics",
      "Database Relationships",
      "Data Modeling",
    ],
    progress: Array(6).fill().map(() => randomProgress()),
  },
  {
    category: "Tools",
    skills: ["VS Code", "Git", "GitHub", "npm", "Browser DevTools", "Postman"],
    progress: Array(6).fill().map(() => randomProgress()),
  },
  {
    category: "Deployment",
    skills: [
      "GitHub Pages",
      "Netlify",
      "Vercel",
      "Render",
      "Environment Variables",
    ],
    progress: Array(5).fill().map(() => randomProgress()),
  },
];
