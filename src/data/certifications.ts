export interface CertificationItem {
  id: string;
  order: number;
  title: string;
  issuer: string;
  type: "certification" | "training";
  category: "Cybersecurity & Networking" | "AI & Cloud" | "Programming";
  description: string;
  skills: string[];
  badgeLabel: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "aws-cloud",
    order: 1,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    type: "certification",
    category: "AI & Cloud",
    description:
      "Core cloud architecture, AWS cloud security compliance, Identity and Access Management (IAM), shared responsibility model, and infrastructure resilience.",
    skills: ["Cloud Architecture", "AWS Core Services", "Cloud Security", "IAM Compliance"],
    badgeLabel: "Certification",
  },
  {
    id: "cisco-networking",
    order: 2,
    title: "Cisco Networking Academy – Networking Basics",
    issuer: "Cisco Networking Academy",
    type: "certification",
    category: "Cybersecurity & Networking",
    description:
      "Computer networking fundamentals, OSI & TCP/IP models, routing and switching principles, IP addressing, and packet flow.",
    skills: ["Networking Basics", "TCP/IP Architecture", "Routing & Switching", "Packet Analysis"],
    badgeLabel: "Certification",
  },
  {
    id: "python-essentials",
    order: 3,
    title: "Python Essentials 1",
    issuer: "Python Institute / Cisco Academy",
    type: "certification",
    category: "Programming",
    description:
      "Foundational Python programming, control flow, functions, modular application design, and fundamental algorithmic logic.",
    skills: ["Python", "Modular Architecture", "Data Structures", "Algorithmic Logic"],
    badgeLabel: "Certification",
  },
  {
    id: "google-gemini",
    order: 4,
    title: "Google – Gemini Certified University Student",
    issuer: "Google",
    type: "certification",
    category: "AI & Cloud",
    description:
      "Certified proficiency in leveraging Google Gemini AI models, prompt engineering, multimodal reasoning, and rapid developer prototyping.",
    skills: ["Generative AI", "Gemini Models", "Prompt Engineering", "Multimodal AI"],
    badgeLabel: "Certification",
  },
  {
    id: "be10x-ai",
    order: 5,
    title: "Be10x AI Tools Workshop",
    issuer: "Be10x",
    type: "training",
    category: "AI & Cloud",
    description:
      "Hands-on workshop exploring modern AI productivity workflows, developer tooling, and automated engineering integration.",
    skills: ["AI Workflows", "Productivity Automation", "Developer Tooling"],
    badgeLabel: "Workshop",
  },
  {
    id: "elevance-soc",
    order: 6,
    title: "Real-Time Security Operations Center (SOC) Training",
    issuer: "Elevance Skills",
    type: "training",
    category: "Cybersecurity & Networking",
    description:
      "Practical hands-on training on enterprise SOC operations, live security event monitoring, log correlation, and defensive threat triage.",
    skills: ["SOC Monitoring", "Incident Analysis", "Log Correlation", "Threat Triage"],
    badgeLabel: "Workshop & Training",
  },
];

