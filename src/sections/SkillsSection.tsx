import React from "react";
import { Terminal, Shield, Globe, Cpu, Database, Wrench } from "lucide-react";
import { skillCategories } from "../data/skills";

export const SkillsSection: React.FC = () => {
  const getGroupIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Terminal size={16} color="var(--accent-cyan)" />;
      case "cybersecurity":
        return <Shield size={16} color="var(--accent-cyan)" />;
      case "webdev":
        return <Globe size={16} color="var(--accent-cyan)" />;
      case "aiml":
        return <Cpu size={16} color="var(--accent-cyan)" />;
      case "databases":
        return <Database size={16} color="var(--accent-cyan)" />;
      case "tools":
        return <Wrench size={16} color="var(--accent-cyan)" />;
      default:
        return <Terminal size={16} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">03 // Technical Capabilities</div>
          <h2 className="section-heading-editorial">
            Disciplines &amp; Core Toolchain
          </h2>
          <p className="section-subheading-editorial">
            Systematic technical competencies organized across systems programming, defensive security, intelligent algorithms, and developer tooling.
          </p>
        </div>

        {/* 6-Block Grid: Clean, Text-First Technical Matrix */}
        <div className="skills-grid-container">
          {skillCategories.map((group) => (
            <div
              key={group.id}
              className="skill-card-block"
              style={{
                padding: "clamp(1.5rem, 2.5vw, 2rem)",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <div>
                {/* Header with index, restrained icon, and group name */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span className="mono-tag" style={{ color: "var(--accent-cyan)" }}>
                      {group.index} //
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {group.name}
                    </h3>
                  </div>
                  <div style={{ opacity: 0.9 }}>{getGroupIcon(group.id)}</div>
                </div>

                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "1.5rem",
                  }}
                >
                  {group.description}
                </p>
              </div>

              {/* Text-based Technology Listing */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.55rem",
                    }}
                  >
                    <span style={{ color: "var(--accent-cyan)", fontSize: "0.75rem" }}>—</span>
                    <span style={{ color: "var(--text-primary)" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skills-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .skill-card-block:hover {
          border-color: var(--border-strong) !important;
          background: var(--bg-surface-elevated) !important;
        }

        @media (max-width: 1024px) {
          .skills-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
