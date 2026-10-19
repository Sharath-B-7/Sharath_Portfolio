export interface ProjectVisualPanel {
  systemTag: string;
  statusLabel: string;
  statusColor?: string;
  queryLabel: string;
  queryValue: string;
  highlightCard: {
    title: string;
    badge: string;
    value: string;
    unit?: string;
    note: string;
    theme: "danger" | "warning" | "success" | "neutral" | "cyan";
  };
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
    color?: string;
  }[];
  pipelineFlow: {
    label: string;
    steps: string;
  };
  imagePreview?: string;
  imageAlt?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  categoryTag: string;
  statusBadge?: string;
  name: string;
  subtitle: string;
  problem: string;
  architectureContribution: string;
  capabilities: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  diagramUrl?: string;
  visualPanel: ProjectVisualPanel;
}

export const projectsData: ProjectItem[] = [
  {
    id: "fraudlens-ai",
    number: "01",
    categoryTag: "01 // FEATURED PLATFORM",
    statusBadge: "ACTIVE DEVELOPMENT",
    name: "FraudLens AI",
    subtitle: "AI-Powered Digital Payment Fraud Intelligence",
    problem:
      "Digital payment platforms and rapid UPI transactions expose everyday users and merchants to scams and suspicious payment identities without proactive trust metrics or network visibility before funds transfer.",
    architectureContribution:
      "Designed and implemented an intelligence engine that evaluates digital payment identities (e.g. UPI IDs) using graph relationship analysis, community reporting signals, and behavioral heuristics to output an interpretable Cyber Trust Score.",
    capabilities: [
      "Fraud Risk Scoring (Trust Index)",
      "Community Fraud Reporting & Tracking",
      "Fraud Graph Relationship Visualizer",
      "Geographic Fraud Insights & Heat Map",
      "Real-Time Intelligence Dashboard",
    ],
    techStack: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "SQLite", "Vite"],
    githubUrl: "https://github.com/Sharath-B-7",
    visualPanel: {
      systemTag: "SYS // FRAUDLENS_TELEMETRY",
      statusLabel: "ONLINE",
      statusColor: "var(--accent-emerald)",
      queryLabel: "QUERY ENTITY:",
      queryValue: "payment-gateway.9821@okhdfcbank",
      highlightCard: {
        title: "CYBER TRUST SCORE",
        badge: "HIGH RISK ALERT",
        value: "34",
        unit: "/ 100",
        note: "Confidence: 94.2% based on 14 community reports & mule node graph clustering. (Illustrative Demo Data)",
        theme: "danger",
      },
      metrics: [
        {
          label: "Graph Node Centrality:",
          value: "0.82 (Cluster Flag)",
          highlight: false,
        },
        {
          label: "Community Scam Flags:",
          value: "14 Verified",
          highlight: true,
          color: "#f87171",
        },
        {
          label: "Regional Concentration:",
          value: "Tamil Nadu & Karnataka",
          highlight: false,
        },
      ],
      pipelineFlow: {
        label: "PIPELINE FLOW:",
        steps: "UPI Input → Graph Engine → Anomaly Scorer → Trust Score & Report",
      },
    },
  },
  {
    id: "android-malware-analysis",
    number: "02",
    categoryTag: "02 // SECURITY RESEARCH",
    statusBadge: "STATIC LAB RESEARCH",
    name: "Android Malware Static Analysis",
    subtitle: "APK Decompilation, Manifest Audit & Forensic Triage Pipeline",
    problem:
      "Mobile malware frequently conceals dangerous behaviors behind benign utility facades, requesting high-risk system privileges and quietly establishing unauthorized background network channels without user awareness.",
    architectureContribution:
      "Executed a structured static analysis workflow to inspect Android application structure and artifacts without executing untrusted binaries. Decompiled APK packages, audited AndroidManifest.xml for dangerous permission combinations and exported components, disassembled Smali bytecode, and mapped extracted indicators against security event baselines.",
    capabilities: [
      "Manifest & permission privilege audit",
      "Detection of hidden broadcast receivers & exported services",
      "Disassembled Smali bytecode & string triage",
      "Extraction of unencrypted HTTP/C2 endpoints and certificate signatures",
      "Forensic indicator mapping against security event baselines",
    ],
    techStack: ["Python", "Linux", "Bash", "Android Debug Tools", "Smali / APKTool", "Log Analysis"],
    githubUrl: "https://github.com/Sharath-B-7",
    visualPanel: {
      systemTag: "SYS // ANDROID_STATIC_TRIAGE",
      statusLabel: "ANALYSIS READY",
      statusColor: "var(--accent-cyan)",
      queryLabel: "TARGET APK ARCHIVE:",
      queryValue: "com.utility.systemupdater.v2.apk",
      highlightCard: {
        title: "STATIC AUDIT RATING",
        badge: "SUSPICIOUS PRIVILEGES",
        value: "HIGH",
        unit: "RISK PROFILE",
        note: "Manifest requests 6 dangerous Android permissions with an exported background boot receiver and plain HTTP endpoint. (Lab Sample)",
        theme: "warning",
      },
      metrics: [
        {
          label: "Dangerous Permissions:",
          value: "BOOT_COMPLETED, SEND_SMS, READ_CONTACTS",
          highlight: true,
          color: "#fbbf24",
        },
        {
          label: "Suspicious Component:",
          value: "com.utility.receiver.BootTrigger (Exported)",
          highlight: false,
        },
        {
          label: "Extracted Endpoint:",
          value: "http://192.168.1.105:8080/sync (Cleartext HTTP)",
          highlight: true,
          color: "#f87171",
        },
      ],
      pipelineFlow: {
        label: "TRIAGE FLOW:",
        steps: "APK Archive → Unpack & Disassemble → Manifest & Smali Audit → Indicator Extraction → Report",
      },
    },
  },
  {
    id: "knowledge-gap-detection",
    number: "03",
    categoryTag: "03 // AI / MACHINE LEARNING",
    statusBadge: "ACADEMIC RESEARCH",
    name: "EduGap AI: Knowledge Gap Detection",
    subtitle: "Deep Knowledge Tracing & Prerequisite-Aware Personalized Learning",
    problem:
      "Traditional testing treats question scores as binary right-or-wrong outcomes. When a student struggles with complex questions, standard platforms fail to determine whether the deficiency stems from the current topic or a foundational prerequisite concept learned earlier.",
    architectureContribution:
      "Formulated and implemented an intelligent dual-AI diagnostic system combining a tuned XGBoost classifier and PyTorch LSTM Deep Knowledge Tracing with a 20-node prerequisite concept graph. The system models sequential problem-solving interactions, predicts cognitive friction levels, and maps unmastered concepts directly to personalized remediation paths.",
    capabilities: [
      "Dynamic 10-skill diagnostic assessment engine across mathematics domains",
      "Dual-AI architecture (Tuned XGBoost Classifier + PyTorch LSTM DKT)",
      "20-node prerequisite concept graph dependency mapping",
      "1-to-1 skill mastery classification (<70% Weak Action Required vs ≥70% Strong)",
      "Automated personalized remediation ranking (Khan Academy streams & master notes)",
      "Interactive diagnostic analytics dashboard & downloadable report generator",
    ],
    techStack: ["Python", "PyTorch (LSTM)", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "Flask", "Chart.js"],
    githubUrl: "https://github.com/Sharath-B-7",
    diagramUrl: "/projects/edugap-architecture.png",
    visualPanel: {
      systemTag: "SYS // EDUGAP_DIAGNOSTIC_ENGINE",
      statusLabel: "MODEL TRAINED",
      statusColor: "var(--accent-emerald)",
      queryLabel: "STUDENT DIAGNOSTIC SESSION:",
      queryValue: "#CIT-2026-CS88 · Skill Session [Algebra & Geometry]",
      highlightCard: {
        title: "COGNITIVE MASTERY LEVEL",
        badge: "MODERATE GAP",
        value: "72.4%",
        unit: "OVERALL MASTERY",
        note: "Tuned XGBoost (92.40% Accuracy, ROC-AUC 0.9865) + PyTorch LSTM sequence tracing across 10 skill domains. (Verified Benchmark)",
        theme: "cyan",
      },
      metrics: [
        {
          label: "Prerequisite Concept Graph:",
          value: "20 Concept Nodes (Geometry → Trigonometry)",
          highlight: false,
        },
        {
          label: "Critical Deficit Identified:",
          value: "Fraction Arithmetic (42% Accuracy — High Friction)",
          highlight: true,
          color: "#f87171",
        },
        {
          label: "Targeted Remediation:",
          value: "Khan Academy Concept 04 + Step-by-Step Notes",
          highlight: false,
        },
      ],
      pipelineFlow: {
        label: "INFERENCE FLOW:",
        steps: "Interaction Logs → Feature Vector (23 Dims) → DKT / XGBoost → Prerequisite Graph → Remediation Path",
      },
      imagePreview: "/projects/edugap-architecture.png",
      imageAlt: "EduGap AI System Architecture Diagram",
    },
  },
  {
    id: "aethergrade",
    number: "04",
    categoryTag: "04 // SECURE SYSTEMS",
    statusBadge: "SYSTEMS BUILT",
    name: "AetherGrade: Security & Grade Engine",
    subtitle: "High-Performance Java Application with Cryptographic Audit Ledger & RBAC",
    problem:
      "Academic institutions require high-integrity grading software where student evaluations and transcript records are tamper-proof, auditable, and restricted by strict role boundaries to prevent unauthorized modification of academic standing.",
    architectureContribution:
      "Architected a native Java SE application featuring multi-role JWT access control (Admin, Faculty, Student), PBKDF2/BCrypt password hashing, AES-256 payload encryption, and an immutable SHA-256 hash-chain audit ledger that flags historical single-byte database tampering.",
    capabilities: [
      "Multi-Role RBAC (Admin, Faculty, Student) with cryptographically signed JWTs",
      "Immutable SHA-256 hash-chain tamper-evident audit ledger",
      "Cryptographic HMAC-SHA256 privacy verification tokens",
      "Asynchronous multi-threaded worker engine for non-blocking report generation",
      "Automated GPA calculation, percentage metrics, and transcript printing",
    ],
    techStack: ["Java SE 21", "MySQL 8.0", "Native HTTP Server", "AES-256 / SHA-256", "JWT / PBKDF2", "JavaScript"],
    githubUrl: "https://github.com/Sharath-B-7",
    visualPanel: {
      systemTag: "SYS // AETHERGRADE_CORE",
      statusLabel: "SECURE RUNTIME",
      statusColor: "var(--accent-emerald)",
      queryLabel: "ACTIVE AUTH PRINCIPAL:",
      queryValue: "faculty.dept_cs@cit.edu [ROLE: FACULTY]",
      highlightCard: {
        title: "AUDIT LEDGER INTEGRITY",
        badge: "HASH-CHAIN VERIFIED",
        value: "0",
        unit: "TAMPER FLAGS",
        note: "SHA-256 block ledger validated against MySQL transaction records. Ledger height #1,428.",
        theme: "success",
      },
      metrics: [
        {
          label: "Role-Based Access:",
          value: "JWT Verified (Admin, Faculty, Student)",
          highlight: false,
        },
        {
          label: "Hash-Chain Ledger:",
          value: "SHA-256 Previous-Hash Linkage Validated",
          highlight: true,
          color: "var(--accent-emerald)",
        },
        {
          label: "Privacy Verification:",
          value: "HMAC-SHA256 Tokens for 3rd-Party Verification",
          highlight: false,
        },
      ],
      pipelineFlow: {
        label: "MUTATION FLOW:",
        steps: "HTTP Request → RBAC Auth Filter → Controller → DAO Mutation → SHA-256 Ledger Block → Verified",
      },
    },
  },
  {
    id: "soc-training",
    number: "05",
    categoryTag: "05 // DEFENSIVE SECURITY",
    statusBadge: "VERIFIED PRACTICAL TRAINING",
    name: "Security Operations Center (SOC) Training",
    subtitle: "Live Event Monitoring, Log Correlation & Defensive Incident Triage",
    problem:
      "Enterprise networks generate millions of raw logs daily. Security analysts must rapidly differentiate between false positives and high-severity attacks to isolate compromised systems before threat actors move laterally.",
    architectureContribution:
      "Completed intensive practical hands-on training on enterprise SOC operations with Elevance Skills. Practiced analyzing authentication anomalies, parsing syslog and firewall entries, reconstructing threat timelines, and applying formal incident escalation procedures.",
    capabilities: [
      "Continuous security event monitoring across host and network telemetry",
      "Multi-source log correlation (auth logs, firewall events, and syslogs)",
      "Incident response lifecycle execution: identification, containment, and preservation",
      "SIEM-style threat timeline reconstruction and anomaly detection",
      "Ticket escalation and structured security incident reporting",
    ],
    techStack: ["SOC Workflows", "SIEM Concepts", "Log Analysis", "Network Security", "Ubuntu Linux", "Syslog / Auth Logs"],
    githubUrl: "https://github.com/Sharath-B-7",
    visualPanel: {
      systemTag: "SYS // SOC_TELEMETRY_MONITOR",
      statusLabel: "LIVE FEED",
      statusColor: "var(--accent-cyan)",
      queryLabel: "LOG INGESTION STREAM:",
      queryValue: "/var/log/auth.log [SURICATA / IPTABLES INTERCEPT]",
      highlightCard: {
        title: "INCIDENT CLASSIFICATION",
        badge: "BRUTE-FORCE DETECTED",
        value: "TIER 2",
        unit: "SEVERITY ALERT",
        note: "50 failed SSH authentication attempts within 30 seconds from single external IP. Host isolation initiated.",
        theme: "warning",
      },
      metrics: [
        {
          label: "Event Correlation:",
          value: "Timestamp clustering across Auth & Firewall logs",
          highlight: false,
        },
        {
          label: "Triage Protocol:",
          value: "Identify → Contain → Preserve → Remediate",
          highlight: true,
          color: "#fbbf24",
        },
        {
          label: "Escalation Target:",
          value: "Tier 2 Incident Response Team (Ticket #SEC-809)",
          highlight: false,
        },
      ],
      pipelineFlow: {
        label: "SOC TRIAGE FLOW:",
        steps: "Log Ingestion → Parser / Normalizer → Correlation Engine → Alert Triage → Incident Containment",
      },
    },
  },
];
