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
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.5rem",
              }}
              className="about-meta-grid"
            >
              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  padding: "1rem 1.25rem",
                }}
              >
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  Academic Program
                </span>
                <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)", fontWeight: 600, display: "block" }}>
                  B.E. CSE — Cyber Security
                </span>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-sans)", marginTop: "0.2rem", display: "block" }}>
                  CIT Chennai · 2025–2029
                </span>
              </div>

              <div
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  padding: "1rem 1.25rem",
                }}
              >
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  Academic Standing
                </span>
                <span style={{ fontSize: "0.9375rem", color: "var(--accent-emerald)", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--accent-emerald)",
                      display: "inline-block",
                    }}
                  />
                  {personalInfo.education.cgpa}
                </span>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-sans)", marginTop: "0.2rem", display: "block" }}>
                  Consistent Academic Record
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clear, Credible Technical Narrative */}
          <div className="about-right-col" style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              I am a second-year undergraduate student pursuing a Bachelor of Engineering in Computer Science and Engineering with a specialization in Cyber Security at <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Chennai Institute of Technology</strong>. My primary focus centers on systems security, threat modeling, network protocols, and developing software with security considered from the ground up.
            </p>

            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              Beyond coursework, I apply a structured approach to technical learning and problem-solving. Through daily practice on <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>LeetCode with over 450+ problems solved</strong>, I have cultivated a strong foundation in data structures, graph theory, dynamic programming, and space-time complexity analysis. This algorithmic rigor directly informs how I architect backend logic and evaluate computational efficiency.
            </p>

            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              In practical project work, I bridge cybersecurity with software development and artificial intelligence. Projects such as <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>FraudLens AI</strong> and <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>EduGap AI</strong> highlight my work in designing graph relationship engines, machine learning anomaly scoring pipelines, and verifiable full-stack applications.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <span>Languages: English, Tamil</span>
              <span>·</span>
              <span>Location: Chennai, India</span>
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

        .about-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 580px) {
          .about-meta-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
};
