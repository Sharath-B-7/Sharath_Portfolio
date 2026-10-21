import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "2.75rem" }}>
          <div className="section-label">04 · Academic Foundation</div>
          <h2 className="section-heading-editorial">
            Education &amp; Scholastic Record
          </h2>
          <p className="section-subheading-editorial">
            Formal undergraduate studies in Computer Science and Engineering with Cyber Security specialization at Chennai Institute of Technology, grounded in a strong secondary schooling record.
          </p>
        </div>

        {/* 2-Column Split: Undergraduate Degree & Scholastic Distinctions */}
        <div className="edu-split-grid">
          {/* Formal Degree Card */}
          <div
            className="edu-card-block"
            style={{
              border: "1px solid var(--border-default)",
              background: "var(--bg-surface)",
              borderRadius: "10px",
              padding: "clamp(1.35rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
          >
            <div>
              {/* Top Meta Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.85rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span className="mono-tag" style={{ color: "var(--accent-terracotta)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <GraduationCap size={13} />
                  01 · Undergraduate Degree
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--accent-emerald)",
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid var(--accent-emerald-border)",
                    padding: "0.15rem 0.55rem",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-emerald)",
                      display: "inline-block",
                    }}
                  />
                  CGPA: {personalInfo.education.cgpa}
                </span>
              </div>

              {/* Institution Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.35rem",
                }}
              >
                {personalInfo.education.college}
              </h3>

              {/* Degree Name */}
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--accent-terracotta-light)",
                  fontWeight: 600,
                  marginBottom: "0.45rem",
                }}
              >
                {personalInfo.education.degree}
              </div>

              {/* Term & Location */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.25rem",
                }}
              >
                {personalInfo.education.year} (2nd Year) · {personalInfo.education.location}
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68, marginBottom: "1.5rem" }}>
                Rigorous curriculum bridging systems programming, low-level architecture, and defensive cybersecurity. Coursework emphasizes building verifiable software, threat modeling, operating system internals, and discrete algorithmic logic.
              </p>
            </div>

            {/* Core Coursework Categories */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.6875rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  marginBottom: "0.6rem",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <BookOpen size={12} />
                Key Coursework &amp; Academic Breadth:
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {[
                  "Defensive Cybersecurity",
                  "Network Security",
                  "Operating Systems",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Systems Programming",
                  "Object-Oriented Design",
                  "Computer Networks",
                ].map((course) => (
                  <span
                    key={course}
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
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scholastic Distinctions Card (Secondary & Higher Secondary) */}
          <div
            className="edu-card-block"
            style={{
              border: "1px solid var(--border-default)",
              background: "var(--bg-surface)",
              borderRadius: "10px",
              padding: "clamp(1.35rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
          >
            <div>
              {/* Top Meta Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.85rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span className="mono-tag" style={{ color: "var(--accent-terracotta)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <Award size={13} />
                  02 · Scholastic Distinctions
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-secondary)",
                    background: "var(--bg-surface-subtle)",
                    border: "1px solid var(--border-subtle)",
                    padding: "0.15rem 0.55rem",
                    borderRadius: "4px",
                  }}
                >
                  Top Rank Distinctions
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.35rem",
                }}
              >
                Secondary Schooling
              </h3>

              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.25rem",
                }}
              >
                Consistent academic top-rank performance across state board evaluations.
              </div>

              {/* Class 12 Block */}
              <div
                style={{
                  padding: "1rem 1.15rem",
                  background: "var(--bg-surface-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem", flexWrap: "wrap", gap: "0.35rem" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--accent-terracotta-light)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                    Class 12 (Higher Secondary / HSC)
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.84375rem",
                      fontWeight: 700,
                      color: "var(--accent-emerald)",
                    }}
                  >
                    97% · 3rd School Rank
                  </span>
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                  Little Angels Higher Secondary School
                </div>
                <div style={{ fontSize: "0.78125rem", color: "var(--text-muted)" }}>
                  Higher Secondary concentration in Mathematics, Physics, Chemistry, and Computer Science.
                </div>
              </div>

              {/* Class 10 Block */}
              <div
                style={{
                  padding: "1rem 1.15rem",
                  background: "var(--bg-surface-subtle)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem", flexWrap: "wrap", gap: "0.35rem" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--accent-terracotta-light)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>
                    Class 10 (Secondary / SSLC)
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.84375rem",
                      fontWeight: 700,
                      color: "var(--accent-emerald)",
                    }}
                  >
                    98% · School Topper
                  </span>
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                  Little Angels Matriculation School
                </div>
                <div style={{ fontSize: "0.78125rem", color: "var(--text-muted)" }}>
                  First rank across the graduating school cohort with distinctions across all subjects.
                </div>
              </div>
            </div>

            {/* Scholastic Summary Tag */}
            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "1.25rem",
                marginTop: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                flexWrap: "wrap",
                gap: "0.35rem",
              }}
            >
              <span>Academic Distinction</span>
              <span style={{ color: "var(--accent-terracotta)" }}>Tamil Nadu State Board</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .edu-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(1.75rem, 3vw, 2.5rem);
          align-items: stretch;
        }

        .edu-card-block:hover {
          border-color: var(--border-strong) !important;
        }

        @media (max-width: 960px) {
          .edu-split-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }

        @media (max-width: 640px) {
          .edu-card-block {
            padding: 1.25rem 1rem !important;
            border-radius: 8px !important;
          }
        }
      `}</style>
    </section>
  );
};
