import React, { useState, useEffect } from "react";
import { ArrowUpRight, Image as ImageIcon, X, SlidersHorizontal, BookOpen, GitMerge, Shield, Activity } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projectsData } from "../data/projects";
import type { ProjectItem } from "../data/projects";
import { FraudLensPreview } from "../components/project-previews/FraudLensPreview";
import { RagPreview } from "../components/project-previews/RagPreview";
import { EduGapPreview } from "../components/project-previews/EduGapPreview";
import { AetherGradePreview } from "../components/project-previews/AetherGradePreview";

export const ProjectsSection: React.FC = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<{ url: string; title: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDiagram(null);
      }
    };
    if (selectedDiagram) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedDiagram]);

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "Machine Learning" },
    { id: "rag", label: "RAG & NLP" },
    { id: "systems", label: "Secure Backends" },
    { id: "fraud", label: "Fraud Intelligence" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return project.id === "knowledge-gap-detection";
    if (activeFilter === "rag") return project.id === "rag";
    if (activeFilter === "systems") return project.id === "aethergrade";
    if (activeFilter === "fraud") return project.id === "fraudlens-ai";
    return true;
  });

  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case "knowledge-gap-detection":
        return <EduGapPreview />;
      case "rag":
        return <RagPreview />;
      case "aethergrade":
        return <AetherGradePreview />;
      case "fraudlens-ai":
        return <FraudLensPreview />;
      default:
        return null;
    }
  };

  const renderDomainSpec = (project: ProjectItem) => {
    switch (project.id) {
      case "knowledge-gap-detection":
        return (
          <div className="project-spec-panel">
            <div className="spec-panel-header">
              <span className="spec-panel-icon"><BookOpen size={13} /></span>
              <span className="spec-panel-title">Academic Research Specifications</span>
            </div>
            <div className="project-spec-grid">
              <div className="project-spec-item">
                <span className="project-spec-label">Diagnostic Engine</span>
                <span className="project-spec-value">Tuned XGBoost + PyTorch LSTM sequence modeling for Deep Knowledge Tracing</span>
              </div>
              <div className="project-spec-item">
                <span className="project-spec-label">Concept Graph</span>
                <span className="project-spec-value">20-node prerequisite dependency network mapping cross-domain mathematics skills</span>
              </div>
              <div className="project-spec-item">
                <span className="project-spec-label">Adaptive Path</span>
                <span className="project-spec-value">Automated cognitive deficit detection with targeted remediation resource routing</span>
              </div>
            </div>
          </div>
        );

      case "rag":
        return (
          <div className="project-spec-panel rag-flow-panel">
            <div className="spec-panel-header">
              <span className="spec-panel-icon"><GitMerge size={13} /></span>
              <span className="spec-panel-title">Two-Stage Retrieval Pipeline Architecture</span>
            </div>
            <div className="pipeline-steps-track">
              <div className="pipeline-step-node">
                <span className="step-num">01</span>
                <span className="step-name">PDF Ingestion</span>
                <span className="step-detail">pypdf parser</span>
              </div>
              <div className="pipeline-step-connector" aria-hidden="true">→</div>
              <div className="pipeline-step-node">
                <span className="step-num">02</span>
                <span className="step-name">Chunking</span>
                <span className="step-detail">800 chars / 150 overlap</span>
              </div>
              <div className="pipeline-step-connector" aria-hidden="true">→</div>
              <div className="pipeline-step-node">
                <span className="step-num">03</span>
                <span className="step-name">Vector Search</span>
                <span className="step-detail">ChromaDB (top-15)</span>
              </div>
              <div className="pipeline-step-connector" aria-hidden="true">→</div>
              <div className="pipeline-step-node highlight">
                <span className="step-num">04</span>
                <span className="step-name">Cross-Encoder</span>
                <span className="step-detail">ms-marco (top-4)</span>
              </div>
              <div className="pipeline-step-connector" aria-hidden="true">→</div>
              <div className="pipeline-step-node">
                <span className="step-num">05</span>
                <span className="step-name">Grounded LLM</span>
                <span className="step-detail">Llama 3.1 + Citations</span>
              </div>
            </div>
          </div>
        );

      case "aethergrade":
        return (
          <div className="project-spec-panel">
            <div className="spec-panel-header">
              <span className="spec-panel-icon"><Shield size={13} /></span>
              <span className="spec-panel-title">Security &amp; Cryptographic Architecture</span>
            </div>
            <div className="project-spec-grid">
              <div className="project-spec-item">
                <span className="project-spec-label">Access Boundary</span>
                <span className="project-spec-value">Multi-Role RBAC (Admin, Faculty, Student) with cryptographically signed JWTs</span>
              </div>
              <div className="project-spec-item">
                <span className="project-spec-label">Tamper Defense</span>
                <span className="project-spec-value">Immutable SHA-256 hash-chain ledger that flags historical single-byte tampering</span>
              </div>
              <div className="project-spec-item">
                <span className="project-spec-label">Data Protection</span>
                <span className="project-spec-value">PBKDF2 password hashing, AES-256 payload encryption &amp; HMAC verification</span>
              </div>
            </div>
          </div>
        );

      case "fraudlens-ai":
        return (
          <div className="project-spec-panel">
            <div className="spec-panel-header">
              <span className="spec-panel-icon"><Activity size={13} /></span>
              <span className="spec-panel-title">Graph Threat Intelligence Triad</span>
            </div>
            <div className="project-spec-grid">
              <div className="project-spec-item">
                <span className="project-spec-label">Identity Graph</span>
                <span className="project-spec-value">Degree centrality analysis detecting shared mule accounts and anomalous clusters</span>
              </div>
              <div className="project-spec-item">
                <span className="project-spec-label">Signal Synthesis</span>
                <span className="project-spec-value">Community reports and velocity heuristics synthesized into an interpretable Trust Index (0–100)</span>
              </div>
              <div className="project-spec-item">
                <span className="project-spec-label">Service Layer</span>
                <span className="project-spec-value">High-throughput FastAPI backend with SQLite/SQLAlchemy &amp; interactive client</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="editorial-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className="section-label">02 · Selected Work</div>
          <h2 className="section-heading-editorial">
            Engineered Systems &amp; Research
          </h2>
          <p className="section-subheading-editorial">
            Practical software architectures, retrieval-augmented question-answering pipelines, cryptographic grade ledgers, and intelligent machine learning diagnostics. Every showcased system includes an interactive architecture demonstration grounded in real implementation.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
            flexWrap: "wrap",
            marginBottom: "2.75rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <span
            style={{
              fontSize: "0.71875rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              marginRight: "0.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <SlidersHorizontal size={13} />
            Filter by domain:
          </span>
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              style={{
                background: activeFilter === cat.id ? "var(--accent-terracotta-subtle)" : "var(--bg-surface-subtle)",
                border: activeFilter === cat.id ? "1px solid var(--accent-terracotta-border)" : "1px solid var(--border-subtle)",
                borderRadius: "6px",
                padding: "0.38rem 0.8rem",
                color: activeFilter === cat.id ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: activeFilter === cat.id ? 600 : 500,
                cursor: "pointer",
                minHeight: "36px",
                display: "inline-flex",
                alignItems: "center",
                transition: "all 0.15s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Presentations List (Strict Order 1 to 4) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.25rem" }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`project-editorial-card project-card-${project.id}`}
            >
              <div className="project-grid-layout">
                {/* LEFT COLUMN: Technical Narrative, Architecture & Stack */}
                <div className="project-left-col">
                  {/* Category & Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      marginBottom: "0.85rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="mono-tag" style={{ color: "var(--accent-terracotta)" }}>
                      {project.categoryTag}
                    </span>
                    {project.statusBadge && (
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-sans)",
                          fontWeight: 500,
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-subtle)",
                          padding: "0.15rem 0.55rem",
                          borderRadius: "4px",
                          letterSpacing: "0.02em",
                          background: "var(--bg-surface-subtle)",
                        }}
                      >
                        {project.statusBadge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.025em",
                      lineHeight: 1.25,
                      marginBottom: "0.35rem",
                      overflowWrap: "break-word",
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Subtitle */}
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "var(--accent-terracotta-light)",
                      marginBottom: "1.25rem",
                      fontWeight: 500,
                    }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Domain-Tailored Architectural Spec Element */}
                  {renderDomainSpec(project)}

                  {/* Engineering Narrative */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.5rem" }}>
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68, margin: 0 }}>
                      {project.problem}
                    </p>
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68, margin: 0 }}>
                      {project.architectureContribution}
                    </p>
                  </div>

                  {/* Key Capabilities & Highlights */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                        marginBottom: "0.6rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Key Architecture Highlights
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.45rem",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      {project.capabilities.map((cap, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: "0.84375rem",
                            color: "var(--text-secondary)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: "var(--accent-terracotta)", flexShrink: 0, marginTop: "0.05rem" }}>—</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                      }}
                    >
                      Technologies
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.71875rem",
                            color: "var(--text-secondary)",
                            background: "var(--bg-surface-subtle)",
                            padding: "0.22rem 0.55rem",
                            borderRadius: "4px",
                            border: "1px solid var(--border-subtle)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="project-action-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-editorial-primary"
                      >
                        <GithubIcon size={14} />
                        <span>View Repository</span>
                        <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
                      </a>
                    )}

                    {project.diagramUrl && (
                      <button
                        type="button"
                        onClick={() => setSelectedDiagram({ url: project.diagramUrl!, title: `${project.name} Architecture Diagram` })}
                        className="btn-editorial-secondary"
                      >
                        <ImageIcon size={14} />
                        <span>Architecture Diagram</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* RIGHT COLUMN: Interactive Technical Preview Panel */}
                <div className="project-right-col">
                  {renderProjectVisual(project)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Architecture Diagram Lightbox Modal */}
      {selectedDiagram && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "var(--modal-backdrop-bg)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(0.75rem, 3vw, 1.5rem)",
          }}
          onClick={() => setSelectedDiagram(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "1000px",
              width: "100%",
              maxHeight: "90vh",
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-default)",
              padding: "clamp(1rem, 2.5vw, 1.5rem)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "var(--shadow-lg)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span className="mono-tag" style={{ color: "var(--accent-terracotta)", fontSize: "0.75rem" }}>
                {selectedDiagram.title}
              </span>
              <button
                type="button"
                onClick={() => setSelectedDiagram(null)}
                style={{
                  background: "var(--bg-surface-subtle)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "6px",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "38px",
                  minHeight: "38px",
                  padding: "0.35rem",
                  transition: "all 0.15s ease",
                }}
                aria-label="Close architecture modal"
              >
                <X size={18} />
              </button>
            </div>
            <div style={{ overflow: "auto", maxHeight: "calc(90vh - 100px)", display: "flex", justifyContent: "center" }}>
              <img
                src={selectedDiagram.url}
                alt={selectedDiagram.title}
                style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .project-action-links {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .project-editorial-card {
          border: 1px solid var(--border-default);
          background: var(--bg-surface);
          border-radius: 10px;
          padding: clamp(1.25rem, 3.5vw, 2.75rem);
          position: relative;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .project-editorial-card:hover {
          border-color: var(--border-strong);
        }

        .project-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(1.75rem, 3vw, 3rem);
          align-items: start;
        }

        /* Domain-Tailored Spec Panels */
        .project-spec-panel {
          background: var(--bg-surface-subtle);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 1rem 1.1rem;
          margin-bottom: 1.35rem;
        }

        .spec-panel-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.75rem;
          color: var(--accent-terracotta);
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .spec-panel-icon {
          display: inline-flex;
          align-items: center;
        }

        .project-spec-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
        }

        .project-spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .project-spec-label {
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          color: var(--text-muted);
          letter-spacing: 0.03em;
          font-weight: 500;
        }

        .project-spec-value {
          font-family: var(--font-sans);
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        /* RAG Pipeline Flow Track */
        .rag-flow-panel {
          padding: 1rem 1.15rem;
        }

        .pipeline-steps-track {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .pipeline-step-node {
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 0.5rem 0.65rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 105px;
          flex-shrink: 0;
          transition: border-color 0.15s ease;
        }

        .pipeline-step-node.highlight {
          border-color: var(--accent-terracotta);
          background: var(--accent-terracotta-subtle);
        }

        .step-num {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--accent-terracotta);
          font-weight: 600;
        }

        .step-name {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .step-detail {
          font-family: var(--font-mono);
          font-size: 0.625rem;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .pipeline-step-connector {
          color: var(--accent-terracotta);
          opacity: 0.6;
          font-size: 0.8125rem;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .project-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .project-spec-grid {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
          }
        }

        @media (max-width: 640px) {
          .project-editorial-card {
            padding: 1.25rem 0.85rem !important;
            border-radius: 8px !important;
          }
          .pipeline-step-node {
            min-width: 95px !important;
            padding: 0.4rem 0.55rem !important;
          }
        }

        @media (max-width: 480px) {
          .project-action-links > a,
          .project-action-links > button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
