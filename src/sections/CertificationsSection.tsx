import React, { useState } from "react";
import { certificationsData } from "../data/certifications";
import type { CertificationItem } from "../data/certifications";

export const CertificationsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<"all" | "certification" | "training">("all");

  const certifications = certificationsData.filter((c) => c.type === "certification");
  const trainings = certificationsData.filter((c) => c.type === "training");

  const displayedItems =
    filterType === "all"
      ? certificationsData
      : filterType === "certification"
      ? certifications
      : trainings;

  return (
    <section id="certifications" className="section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <div className="section-tag">
              <span>// 05. Certifications & Training</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
              Credentials & Specialized Training
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Recognized technical certifications alongside hands-on cybersecurity and developer workshops.
            </p>
          </div>

          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "0.3rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <button
              onClick={() => setFilterType("all")}
              style={{
                border: "none",
                background: filterType === "all" ? "rgba(56, 189, 248, 0.12)" : "transparent",
                color: filterType === "all" ? "#ffffff" : "var(--text-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              All ({certificationsData.length})
            </button>
            <button
              onClick={() => setFilterType("certification")}
              style={{
                border: "none",
                background: filterType === "certification" ? "rgba(56, 189, 248, 0.12)" : "transparent",
                color: filterType === "certification" ? "#ffffff" : "var(--text-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Certifications ({certifications.length})
            </button>
            <button
              onClick={() => setFilterType("training")}
              style={{
                border: "none",
                background: filterType === "training" ? "rgba(56, 189, 248, 0.12)" : "transparent",
                color: filterType === "training" ? "#ffffff" : "var(--text-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Training & Workshops ({trainings.length})
            </button>
          </div>
        </div>

        {/* Credentials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
          className="cert-grid"
        >
          {displayedItems.map((item: CertificationItem) => {
            const isCert = item.type === "certification";

            return (
              <div
                key={item.id}
                className="minimal-card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Top Meta Line: Badge & Issuer */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item.issuer}
                    </span>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.71875rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.55rem",
                        borderRadius: "var(--radius-full)",
                        color: isCert ? "var(--accent-blue)" : "var(--accent-emerald)",
                        background: isCert ? "rgba(56, 189, 248, 0.08)" : "rgba(16, 185, 129, 0.08)",
                        border: isCert
                          ? "1px solid rgba(56, 189, 248, 0.25)"
                          : "1px solid rgba(16, 185, 129, 0.25)",
                      }}
                    >
                      {item.badgeLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.6rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-body)",
                      lineHeight: 1.55,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Skills Learned */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-pill" style={{ fontSize: "0.71875rem", padding: "0.2rem 0.5rem" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
