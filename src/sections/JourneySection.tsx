import React from "react";
import { cybersecurityJourney } from "../data/journey";
import { Compass, CheckCircle2 } from "lucide-react";

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Learning Roadmap</span>
          </div>
          <h2 className="section-title">
            Cybersecurity & <span>Engineering Journey</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of milestones, technical acquisitions, and practical projects from foundation to present explorations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "860px",
            margin: "0 auto",
            paddingLeft: "clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "clamp(0.75rem, 2vw, 1.5rem)",
              width: "2px",
              background: "linear-gradient(to bottom, var(--cyan-primary), var(--blue-primary), var(--emerald-primary))",
              boxShadow: "0 0 10px rgba(0, 240, 255, 0.4)",
            }}
          />

          {/* Timeline Milestones */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {cybersecurityJourney.map((item, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {/* Node Dot on the timeline */}
                <div
                  style={{
                    position: "absolute",
                    left: "calc(-1 * clamp(1.5rem, 4vw, 3rem) + clamp(0.75rem, 2vw, 1.5rem) - 7px)",
                    top: "1.25rem",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: "#070a13",
                    border: "3px solid var(--cyan-primary)",
                    boxShadow: "0 0 12px var(--cyan-primary)",
                    zIndex: 2,
                  }}
                />

                {/* Milestone Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "1.5rem 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {/* Card Top Details */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "1.1rem",
                          fontWeight: 800,
                          color: "var(--cyan-primary)",
                          background: "rgba(0, 240, 255, 0.1)",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "6px",
                        }}
                      >
                        {item.step}
                      </span>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff" }}>
                        {item.title}
                      </h3>
                    </div>

                    <span className="cyber-badge blue">
                      {item.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{ color: "#cbd5e1", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {item.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {item.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
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
                          color="var(--emerald-primary)"
                          style={{ flexShrink: 0, marginTop: "3px" }}
                        />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Pills */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      paddingTop: "0.5rem",
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          background: "rgba(15, 23, 42, 0.8)",
                          border: "1px solid var(--border-subtle)",
                          color: "#cbd5e1",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
