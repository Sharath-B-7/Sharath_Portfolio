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
      "SOC Operations",
      "Log Analysis",
      "Incident Analysis & Triage",
      "Android Malware Static Analysis",
      "Security Event Monitoring",
    ],
  },
  {
    id: "webdev",
    index: "03",
    name: "Web Development",
    description: "Modern frontend architectures, RESTful API development, and web application servers.",
    skills: ["HTML5", "CSS3", "React", "Node.js", "Express.js", "Vite", "FastAPI"],
  },
  {
    id: "aiml",
    index: "04",
    name: "AI and Machine Learning",
    description: "Intelligent systems, deep learning architectures, sequence modeling, and tabular classifiers.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch (LSTM)",
      "XGBoost",
      "Convolutional Neural Networks (CNN)",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
    ],
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
    skills: ["Linux / Ubuntu", "Git", "GitHub", "Bash Scripting", "VS Code", "Postman", "Android Debug Tools"],
  },
];
