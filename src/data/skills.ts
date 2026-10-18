export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Core languages for systems development, algorithmic problem solving, and backend logic.",
    skills: ["Python", "Java", "C", "C++", "JavaScript"],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Defensive security fundamentals, threat analysis, forensic log triage, and vulnerability inspection.",
    skills: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "SOC Fundamentals",
      "Log Analysis",
      "Incident Analysis",
      "Android Malware Static Analysis",
      "Security Event Monitoring",
    ],
  },
  {
    id: "webdev",
    name: "Web Development",
    description: "Modern frontend frameworks and backend runtimes for building resilient web applications.",
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "Vite"],
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    description: "Intelligent systems, deep learning architectures, and data-driven analytical modeling.",
    skills: ["Machine Learning", "Deep Learning", "CNN", "NumPy", "Pandas"],
  },
  {
    id: "databases",
    name: "Databases",
    description: "Relational and document storage engines with declarative querying and ORM integration.",
    skills: ["SQL", "SQLite", "MySQL", "MongoDB", "SQLAlchemy"],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Essential development environments, version control systems, and operating environments.",
    skills: ["Git", "GitHub", "Linux", "Ubuntu", "VS Code", "FastAPI"],
  },
];

