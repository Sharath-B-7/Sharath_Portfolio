import React from "react";

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
                  Academic Foundation
                </span>
                <div style={{ fontSize: "1.0625rem", color: "var(--text-primary)", fontWeight: 600, fontFamily: "var(--font-display)" }}>
                  B.E. Computer Science &amp; Engineering (Cyber Security)
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Chennai Institute of Technology · Class of 2029
                </div>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 0.85rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "6px",
                  width: "fit-content",
                  fontSize: "0.78125rem",
                  color: "var(--text-secondary)",
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
                <span>2nd Year Undergraduate · Systems &amp; Security Specialization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clear, Credible Technical Narrative */}
          <div className="about-right-col" style={{ display: "flex", flexDirection: "column", gap: "1.35rem" }}>
            <p style={{ fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: 1.7, maxWidth: "65ch", fontWeight: 400 }}>
              I am a second-year undergraduate student pursuing Computer Science and Engineering with a specialization in Cyber Security at <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Chennai Institute of Technology</strong>. My primary focus centers on systems security, threat modeling, network protocols, and developing software with security considered from the ground up.
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              Beyond coursework, I apply a structured approach to technical learning and problem-solving. Through consistent daily practice on algorithmic challenges, I have cultivated a strong foundation in data structures, graph theory, dynamic programming, and space-time complexity analysis. This algorithmic rigor directly informs how I architect backend logic and evaluate computational efficiency.
            </p>

            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "65ch" }}>
              In practical development, I bridge defensive security with applied intelligence and systems programming. My work centers on architecting graph relationship engines, retrieval-augmented pipelines, cryptographic audit ledgers, and anomaly detection models designed for resilience and computational transparency.
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
