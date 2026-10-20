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
    id: "knowledge-gap-detection",
    number: "01",
    categoryTag: "01 // MACHINE LEARNING & AI",
    statusBadge: "ACADEMIC RESEARCH",
    name: "Explainable and Prerequisite-Aware Knowledge Gap Detection using Machine Learning and Deep Knowledge Tracing for Personalized Learning",
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
    githubUrl: "https://github.com/Sharath-B-7/KnowledgeGapDetection",
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
    id: "rag",
    number: "02",
    categoryTag: "02 // RETRIEVAL-AUGMENTED GENERATION",
    statusBadge: "PRODUCTION RAG PIPELINE",
    name: "RAG",
    subtitle: "Retrieval-Augmented Generation for Context-Aware Question Answering",
    problem:
      "Finding accurate answers from large documents can be difficult when users must manually search through lengthy files. Ordinary language-model responses may also lack direct grounding in the relevant source material.",
    architectureContribution:
      "Presenting an end-to-end retrieval-augmented question-answering system that ingests PDF documents, retrieves relevant passages, and uses a language model to generate answers strictly grounded in the retrieved context. The pipeline executes two-stage candidate retrieval combining ChromaDB cosine vector search with cross-encoder joint re-ranking, and produces page-level source citations.",
    capabilities: [
      "PDF ingestion and document preprocessing with native pypdf text extraction",
      "Recursive text chunking (800 chars, 150 overlap) and embedding generation",
      "Vector-based candidate retrieval (ChromaDB cosine similarity, top 15 candidates)",
      "Cross-encoder re-ranking (ms-marco-MiniLM-L-6-v2) to select top 4 relevant passages",
      "Context-grounded question answering powered by Groq (Llama 3.1 8B)",
      "Page-level source citations and interactive Streamlit Q&A interface",
    ],
    techStack: ["Python", "Streamlit", "LangChain", "ChromaDB", "Sentence-Transformers", "Groq API", "Llama 3.1", "pypdf"],
    githubUrl: "https://github.com/Sharath-B-7/RAG-Powered-Intelligent-Q-A-System",
    visualPanel: {
      systemTag: "SYS // RAG_RETRIEVAL_ENGINE",
      statusLabel: "INDEXED & GROUNDED",
      statusColor: "var(--accent-cyan)",
      queryLabel: "USER INQUIRY:",
      queryValue: "\"How does the two-stage retrieval pipeline optimize accuracy?\"",
      highlightCard: {
        title: "CROSS-ENCODER CONFIDENCE",
        badge: "RE-RANKED TOP 4",
        value: "0.942",
        unit: "RE-RANK SCORE",
        note: "Retrieved 15 dense vector candidates from ChromaDB; cross-encoder re-ranked top 4 chunks with verified page citations. (Demo Sample)",
        theme: "cyan",
      },
      metrics: [
        {
          label: "Vector Search Candidates:",
          value: "Top 15 Chunks (all-MiniLM-L6-v2)",
          highlight: false,
        },
        {
          label: "Cross-Encoder Re-Ranking:",
          value: "Top 4 Chunks (ms-marco-MiniLM-L-6-v2)",
          highlight: true,
          color: "var(--accent-cyan)",
        },
        {
          label: "Context Grounding:",
          value: "Page-Level Citations (Groq / Llama 3.1 8B)",
          highlight: true,
          color: "var(--accent-emerald)",
        },
      ],
      pipelineFlow: {
        label: "WORKFLOW PREVIEW:",
        steps: "PDF Documents → Chunking and Embeddings → Vector Retrieval → Re-ranking → LLM Response with Source Citations",
      },
    },
  },
  {
    id: "aethergrade",
    number: "03",
    categoryTag: "03 // SECURE SYSTEMS",
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
    githubUrl: "https://github.com/Sharath-B-7/Student_Grade_Management_System",
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
    id: "fraudlens-ai",
    number: "04",
    categoryTag: "04 // FRAUD INTELLIGENCE",
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
    githubUrl: "https://github.com/Sharath-B-7/FraudLens-AI",
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
];
