export interface SkillGroup {
  id: string;
  index: string;
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillGroup[] = [
  {
    id: "languages",
    index: "01",
    name: "Programming Languages",
    description: "Core languages for systems engineering, backend logic, and algorithmic problem-solving.",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
  },
  {
    id: "cybersecurity",
    index: "02",
    name: "Cybersecurity",
    description: "Defensive telemetry, static malware triage, network auditing, and incident monitoring.",
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
    id: "aiml",
    index: "03",
    name: "AI / ML",
    description: "Intelligent systems, deep learning architectures, sequence modeling, and data manipulation.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "NumPy",
      "Pandas",
      "PyTorch (LSTM)",
      "XGBoost",
      "Scikit-Learn",
    ],
  },
  {
    id: "webdev",
    index: "04",
    name: "Web Development",
    description: "Modern frontend architectures, RESTful API development, and web application servers.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Vite", "FastAPI"],
  },
  {
    id: "databases",
    index: "05",
    name: "Databases",
    description: "Relational schema design, declarative querying, document stores, and ORM abstractions.",
    skills: ["SQL", "SQLite", "MySQL", "MongoDB", "SQLAlchemy"],
  },
  {
    id: "tools",
    index: "06",
    name: "Tools and Platforms",
    description: "Operating systems, developer environments, version control, and analysis utilities.",
    skills: ["Git", "GitHub", "Linux", "Ubuntu", "VS Code", "FastAPI", "Postman", "Android Debug Tools"],
  },
  {
    id: "other",
    index: "07",
    name: "Other Skills",
    description: "Modern accelerated engineering techniques and rapid software prototyping.",
    skills: ["AI-assisted Coding", "Rapid Prototyping"],
  },
];
