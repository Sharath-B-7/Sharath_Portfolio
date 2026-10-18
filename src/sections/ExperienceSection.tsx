import React from "react";
import { experienceData } from "../data/experience";
import { Briefcase, ShieldAlert, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Exposure</span>
          </div>
          <h2 className="section-title">
            Experience & <span>Training</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical training, laboratory operations, and defensive security workflows.
          </p>
        </div>

        {/* Experience List */}
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <span className="cyber-badge green" style={{ marginBottom: "0.5rem" }}>
                    {item.label}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginTop: "0.35rem",
                    }}
                  >
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--cyan-primary)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {item.organization} • {item.location}
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    color: "var(--text-muted)",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "6px",
                    background: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  {item.timeline}
                </div>
              </div>

              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {item.description}
              </p>

              {/* Core Focus Areas */}
              <div>
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#f8fafc",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <ShieldAlert size={14} color="var(--cyan-primary)" />
                  <span>Key Training Curricula & Focus:</span>
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {item.focusAreas.map((focus, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#94a3b8",
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="var(--cyan-primary)"
                        style={{ flexShrink: 0, marginTop: "3px" }}
                      />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Takeaways */}
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Practical Takeaways:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {item.takeaways.map((takeaway, tIdx) => (
                    <div
                      key={tIdx}
                      style={{
                        fontSize: "0.8125rem",
                        color: "#cbd5e1",
                        lineHeight: 1.5,
                      }}
                    >
                      • {takeaway}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
