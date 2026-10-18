import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="editorial-section" style={{ borderBottom: "1px solid var(--bg-hairline)" }}>
      <div className="container">
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-editorial-grid"
        >
          {/* Left Column: Section Title & Bold Statement */}
          <div>
            <div className="section-label">01 // Approach & Background</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
            >
              Grounding academic computer science in defensive security, algorithmic precision, and software engineering.
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
                  ACADEMIC DEGREE
                </span>
                <span style={{ fontSize: "0.875rem", color: "#f4f4f5", fontWeight: 500, display: "block" }}>
                  B.E. CSE — Cyber Security
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  CIT Chennai (2025–2029)
                </span>
              </div>

              <div>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.25rem" }}>
                  CUMULATIVE CGPA
                </span>
                <span style={{ fontSize: "0.875rem", color: "#f4f4f5", fontWeight: 500, display: "block" }}>
                  8.5 / 10
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Consistent Academic Record
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Concise Authentic Narrative */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              I am a second-year undergraduate student at <strong style={{ color: "#ffffff", fontWeight: 600 }}>Chennai Institute of Technology</strong> specializing in Computer Science and Engineering with a focus on Cyber Security. My engineering philosophy revolves around understanding systems fundamentally — inspecting binaries, tracing packet flows, and eliminating threat vectors before applications deploy.
            </p>

            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              Alongside core cybersecurity coursework, I maintain a disciplined problem-solving routine, having solved over <strong style={{ color: "#ffffff", fontWeight: 600 }}>450+ problems on LeetCode</strong>. This algorithmic training directly sharpens how I analyze data structures, graph clustering, and execution time complexity when building software.
            </p>

            <p style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              My technical exploration extends into practical artificial intelligence and machine learning. Through platforms like <strong style={{ color: "#ffffff", fontWeight: 600 }}>FraudLens AI</strong>, I combine relationship graph modeling and community reporting telemetry with machine learning to identify anomalous digital payment risks before monetary loss occurs.
            </p>

            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>LANGUAGES: English, Tamil</span>
              <span>BASE: Chennai, India</span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
