import React from "react";
import { personalInfo } from "../data/personalInfo";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="editorial-section">
      <div className="container">
        
        <div className="about-editorial-grid">
          {/* Left Column: Heading, Academic Thesis & Credentials */}
          <div className="about-left-col">
            <div className="section-label">01 · Approach &amp; Background</div>
            <h2
              className="section-heading-editorial"
              style={{
                marginBottom: "2rem",
                lineHeight: 1.2,
              }}
            >
              Grounding computer science in defensive cybersecurity, algorithmic discipline, and secure systems design.
            </h2>

            <div
              style={{
                borderTop: "1px solid var(--border-default)",
                paddingTop: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div>
                <span className="mono-tag" style={{ color: "var(--accent-terracotta)", display: "block", marginBottom: "0.35rem" }}>
                  Academic Program &amp; Affiliation
                </span>
                <div style={{ fontSize: "1.0625rem", color: "var(--text-primary)", fontWeight: 700, fontFamily: "var(--font-display)" }}>
                  B.E. Computer Science &amp; Engineering (Cyber Security)
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", marginTop: "0.25rem" }}>
                  Chennai Institute of Technology · Class of 2029
                </div>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "0.6rem 0.95rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "6px",
                  width: "fit-content",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-emerald)",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "0.84375rem", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>
                    CGPA: {personalInfo.education.cgpa}
                  </span>
                </div>
                <span style={{ color: "var(--border-subtle)" }}>|</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontFamily: "var(--font-sans)" }}>
                  2nd Year Scholastic Standing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clear, Credible Technical Narrative */}
          <div className="about-right-col" style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.7, maxWidth: "65ch", fontWeight: 400 }}>
              I am a second-year undergraduate student pursuing a Bachelor of Engineering in Computer Science and Engineering with a specialization in Cyber Security at <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Chennai Institute of Technology</strong>. My primary focus centers on systems security, threat modeling, network protocols, and developing software with security considered from the ground up.
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              Beyond coursework, I apply a structured approach to technical learning and problem-solving. Through daily practice on <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>LeetCode with over 450+ problems solved</strong>, I have cultivated a strong foundation in data structures, graph theory, dynamic programming, and space-time complexity analysis. This algorithmic rigor directly informs how I architect backend logic and evaluate computational efficiency.
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              In practical project work, I bridge cybersecurity with software development and artificial intelligence. Projects such as <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>FraudLens AI</strong> and <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>EduGap AI</strong> highlight my work in designing graph relationship engines, machine learning anomaly scoring pipelines, and verifiable full-stack applications.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                fontSize: "0.78125rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>Location: Chennai, India</span>
              <span>·</span>
              <span>Languages: English, Tamil</span>
              <span>·</span>
              <span>Focus: Defensive Security &amp; Systems</span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2.5rem, 5vw, 4.5rem);
          align-items: start;
        }

        @media (max-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
