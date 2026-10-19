import React, { useState } from "react";
import { ArrowUpRight, Image as ImageIcon, X } from "lucide-react";
import { GithubIcon } from "../components/Icons";
import { projectsData } from "../data/projects";

export const ProjectsSection: React.FC = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<{ url: string; title: string } | null>(null);

  return (
    <section id="projects" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">02 // Selected Work</div>
          <h2 className="section-heading-editorial">
            Engineered Systems &amp; Research
          </h2>
          <p className="section-subheading-editorial">
            A curated index of practical software platforms, static malware triage pipelines, cryptographic backend systems, and machine learning architectures.
          </p>
        </div>

        {/* Project Presentations List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.75rem" }}>
          {projectsData.map((project) => {
            const vp = project.visualPanel;

            return (
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
                    {/* Number & Category Bar */}
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
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border-subtle)",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "4px",
                            letterSpacing: "0.04em",
                            background: "rgba(255, 255, 255, 0.02)",
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
                        fontSize: "clamp(1.85rem, 2.8vw, 2.35rem)",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {project.name}
                    </h3>

                    {/* One-line technical subtitle */}
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
                        style={{ display: "block", marginBottom: "0.35rem", color: "var(--accent-cyan)" }}
                      >
                        PROBLEM STATEMENT
                      </span>
                      <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68 }}>
                        {project.problem}
                      </p>
                    </div>

                    {/* Technical Architecture & Contribution */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <span
                        className="mono-tag"
                        style={{ display: "block", marginBottom: "0.35rem", color: "var(--accent-cyan)" }}
                      >
                        TECHNICAL ARCHITECTURE &amp; CONTRIBUTION
                      </span>
                      <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68 }}>
                        {project.architectureContribution}
                      </p>
                    </div>

                    {/* Implemented Capabilities Checklist */}
                    <div style={{ marginBottom: "1.75rem" }}>
                      <span
                        className="mono-tag"
                        style={{ display: "block", marginBottom: "0.55rem", color: "var(--accent-cyan)" }}
                      >
                        IMPLEMENTED CAPABILITIES
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
                          <span>View on GitHub</span>
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
                          <span>View Architecture Diagram</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Restrained Technical Telemetry Panel */}
                  <div
                    className="project-right-col"
                    style={{
                      border: "1px solid var(--border-default)",
                      background: "var(--bg-surface-elevated)",
                      borderRadius: "6px",
                      padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      fontFamily: "var(--font-mono)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      {/* Telemetry Header */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingBottom: "0.85rem",
                          borderBottom: "1px solid var(--border-subtle)",
                          marginBottom: "1.25rem",
                          fontSize: "0.71875rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        <span style={{ letterSpacing: "0.06em" }}>{vp.systemTag}</span>
                        <span style={{ color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: "var(--accent-cyan)",
                              display: "inline-block",
                              boxShadow: "0 0 6px var(--accent-cyan)",
                            }}
                          />
                          {vp.statusLabel}
                        </span>
                      </div>

                      {/* Query Entity Console Box */}
                      <div style={{ marginBottom: "1.25rem" }}>
                        <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", display: "block", letterSpacing: "0.06em" }}>
                          {vp.queryLabel}
                        </span>
                        <div
                          style={{
                            padding: "0.55rem 0.75rem",
                            background: "rgba(255, 255, 255, 0.025)",
                            border: "1px solid var(--border-subtle)",
                            borderRadius: "4px",
                            color: "var(--text-primary)",
                            fontSize: "0.8125rem",
                            marginTop: "0.35rem",
                            wordBreak: "break-all",
                          }}
                        >
                          {vp.queryValue}
                        </div>
                      </div>

                      {/* Highlight Score / Audit Status Card (Refined & Restrained) */}
                      <div
                        style={{
                          border: "1px solid var(--border-default)",
                          background: "rgba(255, 255, 255, 0.02)",
                          borderRadius: "6px",
                          padding: "1rem",
                          marginBottom: "1.25rem",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                          <span style={{ fontSize: "0.6875rem", color: "var(--text-secondary)", letterSpacing: "0.06em" }}>
                            {vp.highlightCard.title}
                          </span>
                          <span
                            style={{
                              fontSize: "0.6875rem",
                              color: "var(--accent-cyan)",
                              fontWeight: 600,
                              background: "var(--accent-cyan-subtle)",
                              border: "1px solid var(--accent-cyan-border)",
                              padding: "0.15rem 0.45rem",
                              borderRadius: "3px",
                            }}
                          >
                            {vp.highlightCard.badge}
                          </span>
                        </div>
                        <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text-primary)", margin: "0.35rem 0" }}>
                          {vp.highlightCard.value}{" "}
                          {vp.highlightCard.unit && (
                            <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 400 }}>
                              {vp.highlightCard.unit}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                          {vp.highlightCard.note}
                        </div>
                      </div>

                      {/* Signal Breakdown / Metric Rows */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.75rem" }}>
                        {vp.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "1rem",
                              alignItems: "baseline",
                              paddingBottom: "0.4rem",
                              borderBottom: mIdx < vp.metrics.length - 1 ? "1px solid var(--border-subtle)" : "none",
                            }}
                          >
                            <span style={{ color: "var(--text-muted)" }}>{metric.label}</span>
                            <span
                              style={{
                                color: metric.highlight ? "var(--accent-cyan-light)" : "var(--text-primary)",
                                textAlign: "right",
                                fontWeight: metric.highlight ? 600 : 400,
                              }}
                            >
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pipeline Flow Visualization */}
                    <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                      <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em" }}>
                        {vp.pipelineFlow.label}
                      </span>
                      <div style={{ fontSize: "0.71875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {vp.pipelineFlow.steps}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
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
          align-items: stretch;
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
