export interface ExploringDomain {
  id: string;
  category: string;
  badge: string;
  description: string;
  topics: string[];
}

export const currentlyExploring: ExploringDomain[] = [
  {
    id: "cybersecurity",
    category: "Cybersecurity & Blue Teaming",
    badge: "Primary Focus",
    description:
      "Deepening practical knowledge in security architecture, defensive operations, and threat examination.",
    topics: [
      "SOC Workflows",
      "Threat Detection",
      "Security Event Monitoring",
      "Android Malware Analysis",
      "Incident Response Fundamentals",
      "Network Protocols & Defense",
    ],
  },
  {
    id: "aiml",
    category: "AI & Machine Learning",
    badge: "Emerging Exploration",
    description:
      "Investigating how deep models, knowledge tracing, and explainability can integrate with defensive and educational tools.",
    topics: [
      "Machine Learning Fundamentals",
      "Deep Learning",
      "CNN Fundamentals",
      "Data Science with Pandas/NumPy",
      "Deep Knowledge Tracing",
      "Explainable AI (XAI)",
    ],
  },
  {
    id: "development",
    category: "Modern Software Development",
    badge: "Building & Prototyping",
    description:
      "Constructing resilient, type-safe full-stack web applications to deliver practical security and data prototypes.",
    topics: [
      "React Ecosystem",
      "TypeScript",
      "FastAPI Asynchronous Backends",
      "Relational Schema Design & SQLite",
      "RESTful API Integration",
      "Modern Web Architecture",
    ],
  },
  {
    id: "problemsolving",
    category: "Algorithms & Problem Solving",
    badge: "Daily Practice",
    description:
      "Sharpening computational intuition, memory optimization, and algorithmic execution through disciplined problem solving.",
    topics: [
      "Data Structures & Algorithms",
      "Time/Space Complexity Optimization",
      "LeetCode 450+ Practice",
      "Graph Traversal & BFS/DFS",
      "Dynamic Programming Patterns",
      "Algorithmic Debugging",
    ],
  },
];

export const dsaTopics: string[] = [
  "Arrays",
  "Strings",
  "Hashing",
  "Two Pointers",
  "Sliding Window",
  "Binary Search",
  "Linked Lists",
  "Trees",
  "Graphs",
  "Heaps",
  "Sorting",
  "Stack",
  "Queue",
  "Greedy Algorithms",
  "Dynamic Programming",
  "Mathematical Algorithms",
];

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  category: string;
  description: string;
  badge: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "leetcode",
    title: "Algorithmic Problem Solving",
    metric: "450+ Problems Solved",
    category: "DSA & LeetCode",
    description:
      "Demonstrated dedicated and consistent problem-solving discipline across a wide spectrum of data structures, graph traversals, and algorithmic patterns.",
    badge: "Continuous Practice",
  },
  {
    id: "academics",
    title: "Sustained Academic Excellence",
    metric: "98% | 97% | 8.5 CGPA",
    category: "Academic Performance",
    description:
      "Consistently ranked among the top academic performers: 1st Rank in Class 10 (98%), 3rd Rank in Class 12 (97%), and maintaining an 8.5 CGPA in B.E. CSE (Cyber Security).",
    badge: "Academic Top Ranker",
  },
  {
    id: "soc-training",
    title: "Practical Security Operations",
    metric: "Real-Time SOC Exposure",
    category: "Defensive Security",
    description:
      "Successfully underwent specialized hands-on training covering security event monitoring, incident triage, log correlation, and real-time SOC workflows.",
    badge: "Practical Training",
  },
  {
    id: "practical-projects",
    title: "Hands-on Project Development",
    metric: "4 Core Systems & Research",
    category: "Project Engineering",
    description:
      "Architected practical systems including FraudLens AI (fraud risk intelligence), Android Malware Static Analysis, SOC workflows, and Knowledge Gap Detection for personalized learning.",
    badge: "Builder Mindset",
  },
];
