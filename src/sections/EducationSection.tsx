import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

export const EducationSection: React.FC = () => {
  const [filterType, setFilterType] = useState<"all" | "certification" | "training" | "workshop">("all");

  const credentials = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      type: "certification",
      typeLabel: "Certification",
      year: "Verified Credential",
      details: "Cloud Architecture, AWS Core Services, Cloud Security, Shared Responsibility & IAM",
    },
    {
      title: "Google Gemini Certified University Student",
      issuer: "Google",
      type: "certification",
      typeLabel: "Certification",
      year: "Certified Student",
      details: "Generative AI Foundations, Prompt Engineering, Multimodal Reasoning & Prototyping",
    },
    {
      title: "Cisco Python Essentials 1",
      issuer: "Python Institute / Cisco Academy",
      type: "certification",
      typeLabel: "Certification",
      year: "Verified Credential",
      details: "Modular Architecture, Control Flow, Data Structures & Algorithmic Logic in Python",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      type: "certification",
      typeLabel: "Certification",
      year: "Verified Credential",
      details: "TCP/IP Architecture, OSI Model, Routing & Switching Fundamentals, Subnetting & Packet Flow",
    },
    {
      title: "Real-Time Security Operations Center (SOC) Training",
      issuer: "Elevance Skills",
      type: "training",
      typeLabel: "Practical Training",
      year: "Hands-on Training",
      details: "Live Security Event Monitoring, Log Correlation, Triage Protocols & Incident Escalation Workflows",
    },
    {
      title: "AI Tools Workshop",
      issuer: "Be10x",
      type: "workshop",
      typeLabel: "Workshop",
      year: "Completed",
      details: "Modern AI Productivity Workflows, Generative Tooling & Developer Automation Integration",
    },
  ];

  const filteredCredentials = filterType === "all"
    ? credentials
    : credentials.filter((c) => c.type === filterType);

  return (
    <section id="education" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">04 // Education & Credentials</div>
          <h2 className="section-heading-editorial">
            Academic Foundation & Credentials
          </h2>
          <p className="section-subheading-editorial">
            Rigorous undergraduate studies at Chennai Institute of Technology, continuous algorithmic problem solving, and verified technical credentials.
          </p>
        </div>

        {/* Top 2-Column Split: Degree & Problem Solving */}
        <div className="edu-split-grid">
          {/* Formal Degree Card */}
          <div
            className="edu-card-block"
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
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
                  CGPA: 8.5 / 10
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.35rem",
                }}
              >
                Chennai Institute of Technology
              </h3>

              <div style={{ fontSize: "1rem", color: "#f1f5f9", fontWeight: 600, marginBottom: "0.5rem" }}>
                B.E. Computer Science and Engineering — Cyber Security
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.25rem",
                }}
              >
                2025 – 2029 (Currently in 2nd Year) · Chennai, Tamil Nadu
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Core coursework centers on Systems Programming, Cybersecurity, Network Security, Operating Systems, Database Management Systems, and Data Structures & Algorithms.
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
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.25rem" }}>
                  CLASS 12 (HSC)
                </span>
                <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 600, display: "block" }}>
                  97% · 3rd School Rank
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Little Angels Higher Secondary School
                </span>
              </div>

              <div>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.25rem" }}>
                  CLASS 10 (SSLC)
                </span>
                <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 600, display: "block" }}>
                  98% · School Topper
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  Little Angels Matriculation School
                </span>
              </div>
            </div>
          </div>

          {/* Problem Solving / LeetCode Card */}
          <div
            className="edu-card-block"
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
                <span className="mono-tag" style={{ color: "var(--accent-primary)" }}>
                  COMPETITIVE ALGORITHMIC PRACTICE
                </span>
                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-arrow"
                  style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}
                >
                  <span>PROFILE</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.45rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                LeetCode Problem Solving
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.5rem, 5vw, 3.25rem)",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  450+
                </span>
                <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                  problems solved
                </span>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Continuous algorithmic practice emphasizing optimal time and space complexity. Routine focus covers Data Structures, Graph Theory, Dynamic Programming, Tree Traversals, and Two-Pointer strategies.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--bg-hairline)",
                paddingTop: "1.25rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.45rem",
              }}
            >
              {["Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming", "Tree Traversals"].map((t) => (
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

        {/* Credentials Index: Clearly Distinguished Certifications, Training & Workshops */}
        <div style={{ marginTop: "3.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                CREDENTIALS & SPECIALIZED TRAINING
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
                Verified Certifications, Training & Workshops
              </h3>
            </div>

            {/* Filter Pills */}
            <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
              {(
                [
                  { id: "all", label: "All Credentials" },
                  { id: "certification", label: "Certifications" },
                  { id: "training", label: "Practical Training" },
                  { id: "workshop", label: "Workshops" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterType(tab.id)}
                  style={{
                    background: filterType === tab.id ? "rgba(56, 189, 248, 0.12)" : "rgba(255, 255, 255, 0.03)",
                    border: filterType === tab.id ? "1px solid var(--accent-cyan)" : "1px solid var(--bg-hairline)",
                    color: filterType === tab.id ? "#ffffff" : "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Credentials Table / Rows */}
          <div style={{ borderTop: "1px solid var(--bg-hairline)" }}>
            {filteredCredentials.map((cred, idx) => {
              const isCert = cred.type === "certification";
              const isTraining = cred.type === "training";

              return (
                <div
                  key={idx}
                  className="credential-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1.6fr 0.9fr 0.8fr",
                    gap: "1.5rem",
                    padding: "1.25rem 0",
                    borderBottom: "1px solid var(--bg-hairline)",
                    alignItems: "baseline",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#ffffff", display: "block", marginBottom: "0.2rem" }}>
                      {cred.title}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      {cred.issuer}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                    {cred.details}
                  </div>

                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        padding: "0.2rem 0.55rem",
                        border: "1px solid",
                        borderColor: isCert
                          ? "rgba(56, 189, 248, 0.3)"
                          : isTraining
                          ? "rgba(16, 185, 129, 0.3)"
                          : "rgba(255, 255, 255, 0.15)",
                        color: isCert
                          ? "var(--accent-primary)"
                          : isTraining
                          ? "var(--accent-emerald)"
                          : "var(--text-muted)",
                        background: "rgba(255, 255, 255, 0.02)",
                        borderRadius: "2px",
                      }}
                    >
                      {cred.typeLabel}
                    </span>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <span className="mono-tag" style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {cred.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .edu-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
        }

        .edu-card-block:hover {
          border-color: rgba(255, 255, 255, 0.18) !important;
        }

        @media (max-width: 900px) {
          .edu-split-grid {
            grid-template-columns: 1fr;
          }
          .credential-row {
            grid-template-columns: 1fr !important;
            gap: 0.6rem !important;
          }
          .credential-row > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};
