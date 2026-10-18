import React from "react";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export const EducationSection: React.FC = () => {
  const credentials = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      type: "Certification",
      year: "Credential",
      details: "Cloud Architecture, AWS Core Services, Cloud Security & IAM",
    },
    {
      title: "Google Gemini Certified University Student",
      issuer: "Google",
      type: "Certification",
      year: "Certified",
      details: "Generative AI, Prompt Engineering & Multimodal Reasoning",
    },
    {
      title: "Cisco Python Essentials 1",
      issuer: "Python Institute / Cisco Academy",
      type: "Certification",
      year: "Credential",
      details: "Control Flow, Modular Architecture & Algorithmic Logic",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      type: "Certification",
      year: "Credential",
      details: "TCP/IP Architecture, OSI Model, Routing & Packet Flow",
    },
    {
      title: "Real-Time Security Operations Center (SOC) Training",
      issuer: "Elevance Skills",
      type: "Practical Training",
      year: "Hands-on",
      details: "Live Event Monitoring, Log Correlation, Triage & Incident Escalation",
    },
    {
      title: "AI Tools Workshop",
      issuer: "Be10x",
      type: "Workshop",
      year: "Completed",
      details: "Modern AI Productivity Workflows & Developer Tooling",
    },
  ];

  return (
    <section id="education" className="editorial-section" style={{ borderBottom: "1px solid var(--bg-hairline)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-label">04 // Education & Credentials</div>
          <h2 className="section-heading-editorial">
            Academic Foundation & Credentials
          </h2>
          <p className="section-subheading-editorial">
            Formal engineering studies at CIT Chennai, continuous algorithmic problem solving, and verified technical credentials.
          </p>
        </div>

        {/* Top 2-Column Split: Degree & Problem Solving */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "2.5rem",
            marginBottom: "3.5rem",
          }}
          className="edu-split-grid"
        >
          {/* Formal Degree Card */}
          <div
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                <span className="mono-tag" style={{ color: "var(--accent-primary)" }}>
                  UNDERGRADUATE DEGREE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--accent-emerald)",
                  }}
                >
                  8.5 CGPA
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.35rem",
                }}
              >
                Chennai Institute of Technology
              </h3>

              <div style={{ fontSize: "1rem", color: "#e4e4e7", fontWeight: 500, marginBottom: "0.75rem" }}>
                B.E. Computer Science and Engineering — Cyber Security
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.5rem",
                }}
              >
                2025 – 2029 (Currently in 2nd Year) · Chennai, Tamil Nadu
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Coursework emphasizes systems security, networking protocols, operating systems, data structures, and computer science foundations.
              </p>
            </div>

            {/* Prior Scholastic Distinctions */}
            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.25rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              <div>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.2rem" }}>
                  CLASS 12 (HSC)
                </span>
                <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 600 }}>
                  97% · 3rd School Rank
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>
                  Little Angels HSS
                </span>
              </div>

              <div>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.2rem" }}>
                  CLASS 10 (SSLC)
                </span>
                <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 600 }}>
                  98% · School Topper
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block" }}>
                  Little Angels Matriculation
                </span>
              </div>
            </div>
          </div>

          {/* Problem Solving / LeetCode Card */}
          <div
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
                <span className="mono-tag" style={{ color: "var(--accent-primary)" }}>
                  COMPETITIVE PROBLEM SOLVING
                </span>
                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-arrow"
                  style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}
                >
                  <span>PROFILE</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                LeetCode Practice
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  450+
                </span>
                <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  problems solved
                </span>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Disciplined focus on data structures, algorithmic paradigms, and space-time optimization. Core practice spans Arrays, Strings, Two Pointers, Trees, Graphs, and Dynamic Programming.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {["Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming"].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.71875rem",
                    color: "var(--text-muted)",
                    background: "rgba(255, 255, 255, 0.03)",
                    padding: "0.2rem 0.5rem",
                    border: "1px solid var(--bg-hairline)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Credentials Table: Distinct separation between Certifications and Training */}
        <div>
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
              CREDENTIALS INDEX
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              Verified Certifications & Specialized Training
            </h3>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--bg-hairline)",
            }}
          >
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1.2fr 0.8fr 1.5fr",
                  gap: "1.5rem",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--bg-hairline)",
                  alignItems: "baseline",
                }}
                className="credential-row"
              >
                <div>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#ffffff", display: "block" }}>
                    {cred.title}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {cred.issuer}
                  </span>
                </div>

                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  {cred.details}
                </div>

                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid var(--bg-hairline)",
                      borderRadius: "2px",
                      color: cred.type === "Certification" ? "var(--accent-primary)" : "var(--accent-emerald)",
                      background: "rgba(255, 255, 255, 0.02)",
                    }}
                  >
                    {cred.type}
                  </span>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span className="mono-tag">
                    {cred.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .edu-split-grid {
            grid-template-columns: 1fr !important;
          }
          .credential-row {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
          .credential-row > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};
