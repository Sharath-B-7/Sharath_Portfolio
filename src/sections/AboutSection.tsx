import React from "react";
import { personalInfo } from "../data/personalInfo";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="editorial-section">
      <div className="container">
        
        <div className="about-editorial-grid">
          {/* Left Column: Heading, Academic Thesis & Credentials */}
          <div className="about-left-col">
            <div className="section-label">01 // Approach & Background</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.85rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
            >
              Grounding computer science in defensive cybersecurity, algorithmic discipline, and secure systems design.
            </h2>

            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.25rem" }}>
                  ACADEMIC PROGRAM
                </span>
                <span style={{ fontSize: "0.9375rem", color: "#f8fafc", fontWeight: 600, display: "block" }}>
                  B.E. CSE — Cyber Security
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  CIT Chennai · 2025–2029
                </span>
              </div>

              <div>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.25rem" }}>
                  ACADEMIC STANDING
                </span>
                <span style={{ fontSize: "0.9375rem", color: "var(--accent-emerald)", fontWeight: 600, display: "block" }}>
                  {personalInfo.education.cgpa}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  Consistent Academic Record
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clear, Credible Technical Narrative */}
          <div className="about-right-col" style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              I am a second-year undergraduate student pursuing a Bachelor of Engineering in Computer Science and Engineering with a specialization in Cyber Security at <strong style={{ color: "#ffffff", fontWeight: 600 }}>Chennai Institute of Technology</strong>. My primary focus centers on systems security, threat modeling, network protocols, and developing software with security considered from the ground up.
            </p>

            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Beyond coursework, I apply a structured approach to technical learning and problem-solving. Through daily practice on <strong style={{ color: "#ffffff", fontWeight: 600 }}>LeetCode with over 450+ problems solved</strong>, I have cultivated a strong foundation in data structures, graph theory, dynamic programming, and space-time complexity analysis. This algorithmic rigor directly informs how I architect backend logic and evaluate computational efficiency.
            </p>

            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              In practical project work, I bridge cybersecurity with software development and artificial intelligence. Projects such as <strong style={{ color: "#ffffff", fontWeight: 600 }}>FraudLens AI</strong> and <strong style={{ color: "#ffffff", fontWeight: 600 }}>EduGap AI</strong> highlight my work in designing graph relationship engines, machine learning anomaly scoring pipelines, and verifiable full-stack applications.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.75rem",
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>LANGUAGES: English, Tamil</span>
              <span>LOCATION: Chennai, Tamil Nadu, India</span>
              <span>SPECIALIZATION: Defensive Security & Systems</span>
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
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
