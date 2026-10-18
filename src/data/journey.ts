export interface JourneyMilestone {
  step: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const cybersecurityJourney: JourneyMilestone[] = [
  {
    step: "01",
    title: "Programming Foundations",
    category: "Core Fundamentals",
    description:
      "Built rigorous programming and logic foundations through algorithmic thinking, syntax mastery, and systems-level coding.",
    highlights: [
      "Mastered programming fundamentals using Python, C, and C++",
      "Focused on structured programming, memory concepts, and clean coding paradigms",
      "Applied logic to practical problem-solving challenges",
    ],
    skills: ["Python", "C", "C++", "Algorithmic Logic"],
  },
  {
    step: "02",
    title: "DSA & LeetCode Discipline",
    category: "Problem Solving",
    description:
      "Committed to rigorous, daily problem-solving practice across core data structures and algorithmic paradigms.",
    highlights: [
      "Solved 450+ LeetCode problems spanning arrays, dynamic programming, graphs, and trees",
      "Developed deep intuition for asymptotic time/space complexities",
      "Built resilient problem-solving persistence and debugging speed",
    ],
    skills: ["Data Structures", "Algorithms", "Optimization", "LeetCode 450+"],
  },
  {
    step: "03",
    title: "Networking Foundations",
    category: "Network Architecture",
    description:
      "Established foundational comprehension of packet flow, transport layers, and network security protocols.",
    highlights: [
      "Completed Cisco Networking Academy — Networking Basics certification",
      "Studied OSI and TCP/IP stack layers, IP addressing, subnetting, and routing concepts",
      "Examined core network vulnerabilities and security fundamentals",
    ],
    skills: ["TCP/IP", "OSI Model", "Subnetting", "Routing & Switching", "Cisco"],
  },
  {
    step: "04",
    title: "Security Operations Center Exploration",
    category: "Defensive Security",
    description:
      "Explored real-time blue teaming procedures, log correlation, and security event observation in defensive environments.",
    highlights: [
      "Completed Real-Time Security Operations Center (SOC) Training through Elevance Skills",
      "Practiced security event monitoring, anomalous authentication triage, and syslog inspection",
      "Explored standard incident response workflows and escalation protocols",
    ],
    skills: ["SOC Workflows", "SIEM Concepts", "Security Event Monitoring", "Log Analysis"],
  },
  {
    step: "05",
    title: "Android Malware Static Analysis",
    category: "Threat Analysis",
    description:
      "Investigated Android mobile malware mechanics, permissions auditing, and forensic indicator extraction in controlled environments.",
    highlights: [
      "Conducted static analysis of suspicious Android APK packages",
      "Analyzed application permissions, component declarations, and disassembled bytecode",
      "Mapped malware indicators and forensic logs without executing live payloads",
    ],
    skills: ["Static Analysis", "Android Architecture", "Log Investigation", "Threat Indicators"],
  },
  {
    step: "06",
    title: "FraudLens AI Architecture",
    category: "Security Engineering",
    description:
      "Initiated the architecture and development of an AI-powered fraud intelligence platform designed for pre-transaction safety.",
    highlights: [
      "Engineered full-stack architecture combining FastAPI, React, TypeScript, and SQLite",
      "Designed relationship graph explorer concepts to identify coordinated fraud clusters",
      "Synthesized community reporting signals with behavioral markers into a Cyber Trust Score",
    ],
    skills: ["FastAPI", "React", "TypeScript", "Graph Intelligence", "Cyber Trust Score"],
  },
  {
    step: "07",
    title: "AI/ML & Knowledge Tracing Exploration",
    category: "Intelligent Systems",
    description:
      "Expanding into machine learning, deep learning, and explainable models to engineer intelligent defensive and educational systems.",
    highlights: [
      "Studying Machine Learning, Deep Learning, and Convolutional Neural Networks",
      "Researching Explainable AI and Deep Knowledge Tracing for prerequisite-aware gap detection",
      "Combining intelligent data-driven models with practical cybersecurity defense",
    ],
    skills: ["Machine Learning", "Deep Learning", "Knowledge Tracing", "Explainable AI"],
  },
];
