export interface ProjectItem {
  id: string;
  name: string;
  shortName?: string;
  tagline?: string;
  badge: string;
  domain: string;
  description: string;
  problem: string;
  solution: string;
  coreConcepts: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  flowSteps: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlight?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "fraudlens-ai",
    name: "FraudLens AI",
    tagline: "Detect. Analyze. Protect.",
    badge: "In Active Development",
    domain: "Cybersecurity × AI/ML Platform",
    description:
      "FraudLens AI is an AI-powered fraud intelligence platform designed to help identify potentially fraudulent digital payment entities before transactions take place. The platform focuses on analyzing digital payment identities such as UPI IDs and generating a Cyber Trust Score using multiple intelligence signals.",
    problem:
      "Digital payment platforms and rapid UPI transactions expose everyday users and merchants to payment scams and malicious entities, often without proactive trust metrics or network visibility before money is transferred.",
    solution:
      "Designed an intelligence engine combining community reporting signals, relationship graph modeling, and behavioral analytics to evaluate payment identities and output an explainable Cyber Trust Score.",
    coreConcepts: [
      "Graph Intelligence",
      "Behavioral Analytics",
      "Scam Fingerprinting",
      "Community Intelligence",
      "Explainable AI",
      "Fraud Risk Scoring",
    ],
    keyFeatures: [
      {
        title: "UPI Fraud Detection",
        description:
          "Users can search any UPI ID to assess whether it has previously been flagged by genuine users or associated with fraudulent activities.",
      },
      {
        title: "Cyber Trust Score",
        description:
          "Synthesizes weighted telemetry signals and anomaly detection into an interpretable trust/risk index for digital payment entities.",
      },
      {
        title: "Community Fraud Reporting",
        description:
          "Provides structured submission pipelines for users to report suspicious payment identities, scams, and deceptive merchant behavior.",
      },
      {
        title: "Fraud Graph Explorer",
        description:
          "Visualizes multi-node relationship graphs between suspicious entities to uncover potential coordinated fraud rings and mule networks.",
      },
      {
        title: "Fraud Heat Map",
        description:
          "Geographic visualization of reported fraud hotspots, patterns, and regional transaction concentration.",
      },
      {
        title: "Real-Time Dashboard",
        description:
          "Centralized monitoring panel displaying live fraud reports, high-risk entities, suspicious payment identities, and merchant alert tiers.",
      },
    ],
    techStack: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "SQLite", "Vite"],
    flowSteps: ["UPI Identity Input", "Graph Intelligence Engine", "Risk & Behavioral Analysis", "Explainable Cyber Trust Score"],
    githubUrl: "https://github.com/Sharath-B-7",
    highlight: true,
  },
  {
    id: "android-malware-analysis",
    name: "Android Malware Static Analysis",
    badge: "Lab & Security Research",
    domain: "Cybersecurity & Reverse Engineering",
    description:
      "A cybersecurity-focused project involving static analysis of Android malware and examination of malware artifacts, logs, and suspicious behavior without executing untrusted binaries.",
    problem:
      "Mobile malware frequently disguises itself as benign utility apps while requesting dangerous permissions, embedding suspicious receivers, and exfiltrating sensitive credentials in background threads.",
    solution:
      "Executed structured static triage pipelines to unpack APK packages, inspect manifest configurations, audit requested permissions against dangerous Android APIs, and examine telemetry artifacts.",
    coreConcepts: [
      "Android Malware Analysis",
      "Static Malware Analysis",
      "Log Analysis",
      "Incident Monitoring",
      "Security Event Monitoring",
      "Malware Behavior Investigation",
    ],
    keyFeatures: [
      {
        title: "Permission & Manifest Audit",
        description:
          "Evaluated AndroidManifest.xml entries to flag high-risk permission combinations, hidden broadcast receivers, and suspicious intent filters.",
      },
      {
        title: "Static Artifact Extraction",
        description:
          "Analyzed disassembled Smali bytecode structures, hardcoded strings, API endpoints, and certificate signatures.",
      },
      {
        title: "Log & Indicator Correlation",
        description:
          "Mapped extracted forensic indicators against security event patterns and baseline behavior logs to support investigation reporting.",
      },
    ],
    techStack: ["Linux", "Python", "Bash", "Android Debug Tools", "Log Analysis"],
    flowSteps: ["Android Sample (APK)", "Static Analysis", "Indicators Extraction", "Log Correlation", "Investigation Report"],
    highlight: true,
  },
  {
    id: "soc-training",
    name: "Security Operations Center Training",
    badge: "Training / Internship Experience",
    domain: "Defensive Security & Blue Teaming",
    description:
      "Practical cybersecurity training focused on understanding real-time security operations, monitoring, telemetry analysis, and defensive incident investigation workflows.",
    problem:
      "Enterprise systems generate millions of raw logs daily. Distinguishing true-positive security events from background noise requires rigorous SOC triaging protocols and escalation understanding.",
    solution:
      "Gained hands-on exposure to SIEM-style monitoring concepts, incident lifecycle phases, log correlation techniques, and defensive threat triage procedures.",
    coreConcepts: [
      "Security Event Monitoring",
      "Incident Monitoring",
      "Log Analysis",
      "SOC Workflows",
      "Threat Investigation Fundamentals",
      "Security Operations Concepts",
    ],
    keyFeatures: [
      {
        title: "Security Event Monitoring",
        description:
          "Practiced continuous event log observation, pattern recognition across authentication attempts, and network boundary anomalies.",
      },
      {
        title: "Incident Triage & Investigation",
        description:
          "Applied standard incident response frameworks: identification, containment guidelines, evidence preservation, and ticket escalation.",
      },
      {
        title: "Log Analysis Fundamentals",
        description:
          "Inspected syslogs, firewall entries, and auth logs to trace event sequences and reconstruct threat timelines.",
      },
    ],
    techStack: ["SOC Workflows", "SIEM Concepts", "Log Analysis", "Network Security", "Ubuntu Linux"],
    flowSteps: ["Security Events", "Log Analysis", "Event Monitoring", "Incident Investigation", "Defensive Response"],
    highlight: false,
  },
  {
    id: "knowledge-gap-detection",
    name: "Explainable and Prerequisite-Aware Knowledge Gap Detection using Machine Learning and Deep Knowledge Tracing for Personalized Learning",
    shortName: "Knowledge Gap Detection for Personalized Learning",
    tagline: "Detect. Explain. Personalize.",
    badge: "AI/ML Academic Exploration",
    domain: "AI / Machine Learning & EdTech",
    description:
      "An AI/ML-based personalized learning system designed to identify students' knowledge gaps by analyzing learning performance and tracing their understanding of prerequisite concepts rather than solely grading right or wrong answers.",
    problem:
      "Traditional testing treats question scores as binary outcomes. When a student fails a complex question, existing platforms fail to explain whether the deficiency stems from the current topic or a foundational prerequisite concept learned earlier.",
    solution:
      "Formulated a conceptual learning framework that combines Deep Knowledge Tracing with a prerequisite concept graph to trace knowledge evolution over time and generate explainable remediation pathways.",
    coreConcepts: [
      "Machine Learning",
      "Deep Knowledge Tracing",
      "Knowledge Gap Detection",
      "Prerequisite-Aware Learning",
      "Personalized Learning",
      "Explainable AI",
      "Student Performance Analysis",
      "Educational Data Mining",
    ],
    keyFeatures: [
      {
        title: "Knowledge Gap Detection",
        description:
          "Analyzes student interaction patterns and performance data to identify specific subject concepts where the learner demonstrates insufficient mastery.",
      },
      {
        title: "Prerequisite-Aware Analysis",
        description:
          "Evaluates hierarchical dependencies between concepts so that struggles on advanced topics trigger investigation into foundational prerequisites.",
      },
      {
        title: "Deep Knowledge Tracing",
        description:
          "Models temporal knowledge shifts across a sequence of practice problems to gauge student mastery progression over time.",
      },
      {
        title: "Explainable Predictions",
        description:
          "Provides interpretable reasoning for why the model flagged a specific gap rather than treating predictions as an opaque black box.",
      },
      {
        title: "Personalized Learning Pathways",
        description:
          "Recommends targeted concept reviews and adaptive exercise sequences designed around the learner's individual gap profile.",
      },
    ],
    techStack: ["Python", "NumPy", "Pandas", "Machine Learning", "Deep Knowledge Tracing", "Explainable AI"],
    flowSteps: ["Student Learning Data", "Knowledge Tracing", "Prerequisite Graph Analysis", "Knowledge Gap Detection", "Explainable Reasoning", "Personalized Roadmap"],
    highlight: true,
  },
];
