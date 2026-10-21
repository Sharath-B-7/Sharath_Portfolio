import React, { useState } from "react";
import { ArrowUpRight, Image as ImageIcon, X, SlidersHorizontal } from "lucide-react";
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
                background: activeFilter === cat.id ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
                border: activeFilter === cat.id ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                borderRadius: "6px",
                padding: "0.35rem 0.8rem",
                color: activeFilter === cat.id ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: activeFilter === cat.id ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Presentations List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3.25rem" }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-editorial-card"
              style={{
                border: "1px solid var(--border-default)",
                background: "var(--bg-surface)",
                borderRadius: "8px",
                padding: "clamp(1.75rem, 3.5vw, 3rem)",
                position: "relative",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <div className="project-grid-layout">
                {/* LEFT COLUMN: Detailed Technical Architecture & Copy */}
                <div className="project-left-col">
                  {/* Category & Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.85rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="mono-tag" style={{ color: "var(--accent-cyan)" }}>
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
                          padding: "0.15rem 0.5rem",
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
                      fontSize: project.name.length > 40 ? "clamp(1.4rem, 2.2vw, 1.85rem)" : "clamp(1.85rem, 2.8vw, 2.35rem)",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.25,
                      marginBottom: "0.4rem",
                      overflowWrap: "break-word",
                      wordBreak: "break-word",
                    }}
                  >
                    {project.name}
                  </h3>

                  {/* Subtitle */}
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.subtitle}
                  </div>

                  {/* Problem Statement */}
                  <div style={{ marginBottom: "1.35rem" }}>
                    <span
                      className="mono-tag"
                      style={{ display: "block", marginBottom: "0.35rem", color: "var(--accent-cyan-light)" }}
                    >
                      PROBLEM CONTEXT
                    </span>
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68 }}>
                      {project.problem}
                    </p>
                  </div>

                  {/* Technical Architecture & Contribution */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span
                      className="mono-tag"
                      style={{ display: "block", marginBottom: "0.35rem", color: "var(--accent-cyan-light)" }}
                    >
                      ARCHITECTURE &amp; IMPLEMENTATION
                    </span>
                    <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68 }}>
                      {project.architectureContribution}
                    </p>
                  </div>

                  {/* Implemented Capabilities Checklist */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <span
                      className="mono-tag"
                      style={{ display: "block", marginBottom: "0.55rem", color: "var(--accent-cyan-light)" }}
                    >
                      KEY CAPABILITIES &amp; HIGHLIGHTS
                    </span>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "0.5rem 1rem",
                      }}
                    >
                      {project.capabilities.map((cap, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--text-secondary)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.45rem",
                            lineHeight: 1.45,
                          }}
                        >
                          <span style={{ color: "var(--accent-cyan)", fontSize: "0.75rem", flexShrink: 0 }}>—</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.45rem",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.71875rem",
                          color: "var(--text-muted)",
                          background: "rgba(255, 255, 255, 0.03)",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap" }}>
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
            background: "rgba(7, 10, 16, 0.88)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
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
              padding: "1.5rem",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95)",
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
              <span className="mono-tag" style={{ color: "var(--accent-cyan)" }}>
                {selectedDiagram.title}
              </span>
              <button
                type="button"
                onClick={() => setSelectedDiagram(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0.25rem",
                }}
                aria-label="Close architecture modal"
              >
                <X size={20} />
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
        .project-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(2rem, 3.5vw, 3.5rem);
          align-items: start;
        }

        .project-editorial-card:hover {
          border-color: var(--border-strong) !important;
        }

        @media (max-width: 960px) {
          .project-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
