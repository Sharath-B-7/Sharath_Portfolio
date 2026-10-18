import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="editorial-section" style={{ borderBottom: "1px solid var(--bg-hairline)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-label">02 // Selected Work</div>
          <h2 className="section-heading-editorial">
            Engineered Systems & Research
          </h2>
          <p className="section-subheading-editorial">
            A curated index of practical software projects, static security triage pipelines, and machine learning architectures.
          </p>
        </div>

        {/* ==============================================================
            PROJECT 01: FRAUDLENS AI (FEATURED FLAGSHIP - ASYMMETRIC GRID)
            ============================================================== */}
        <div
          style={{
            border: "1px solid var(--bg-hairline)",
            background: "var(--bg-surface)",
            padding: "clamp(2rem, 4vw, 3.5rem)",
            marginBottom: "3rem",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "3.5rem",
              alignItems: "start",
            }}
            className="featured-project-grid"
          >
            {/* Left Column: Project Copy & Technical Details */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <span className="mono-tag" style={{ color: "var(--accent-primary)" }}>
                  01 // FEATURED PLATFORM
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-emerald)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "2px",
                  }}
                >
                  ACTIVE DEVELOPMENT
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
              >
                FraudLens AI
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.5rem",
                }}
              >
                AI-Powered Digital Payment Fraud Intelligence
              </div>

              {/* The Problem */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  THE PROBLEM
                </span>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Digital payment platforms and rapid UPI transactions expose everyday users and merchants to payment scams and malicious entities without proactive trust metrics or network visibility before funds transfer.
                </p>
              </div>

              {/* Technical Contribution */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  TECHNICAL ARCHITECTURE & CONTRIBUTION
                </span>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Designed and implemented an intelligence engine that evaluates digital payment identities (e.g. UPI IDs) using graph relationship analysis, community reporting signals, and behavioral heuristics to output an interpretable <strong style={{ color: "#ffffff", fontWeight: 500 }}>Cyber Trust Score</strong>.
                </p>
              </div>

              {/* Implemented Features Checklist */}
              <div style={{ marginBottom: "1.75rem" }}>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.5rem" }}>
                  IMPLEMENTED CAPABILITIES
                </span>
                <ul
                  style={{
                    listStyle: "none",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "0.5rem",
                  }}
                >
                  {[
                    "Fraud Risk Scoring (Trust Index)",
                    "Community Fraud Reporting & Tracking",
                    "Fraud Graph Relationship Visualizer",
                    "Geographic Fraud Insights & Heat Map",
                    "Real-Time Intelligence Dashboard",
                  ].map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "0.8125rem",
                        color: "#e4e4e7",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.45rem",
                      }}
                    >
                      <span style={{ color: "var(--accent-primary)", fontSize: "0.75rem" }}>—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                {["FastAPI", "React", "TypeScript", "SQLAlchemy", "SQLite", "Vite"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      background: "rgba(255, 255, 255, 0.03)",
                      padding: "0.25rem 0.55rem",
                      border: "1px solid var(--bg-hairline)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Working Links */}
              <div>
                <a
                  href="https://github.com/Sharath-B-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-primary"
                >
                  <GithubIcon size={15} />
                  <span>View Repository on GitHub</span>
                  <ArrowUpRight size={13} style={{ opacity: 0.7 }} />
                </a>
              </div>
            </div>

            {/* Right Column: High-Quality Engineered CSS Telemetry Composition */}
            <div
              style={{
                border: "1px solid var(--bg-hairline)",
                background: "#0d0d10",
                padding: "1.5rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              {/* Telemetry Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "0.85rem",
                  borderBottom: "1px solid var(--bg-hairline)",
                  marginBottom: "1.25rem",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                }}
              >
                <span>SYS // FRAUDLENS_TELEMETRY</span>
                <span style={{ color: "var(--accent-emerald)" }}>● ONLINE</span>
              </div>

              {/* Mock Query Console */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", display: "block" }}>
                  QUERY ENTITY:
                </span>
                <div
                  style={{
                    padding: "0.5rem 0.75rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--bg-hairline)",
                    color: "#f4f4f5",
                    fontSize: "0.8125rem",
                    marginTop: "0.3rem",
                  }}
                >
                  payment-gateway.9821@okhdfcbank
                </div>
              </div>

              {/* Trust Score Card */}
              <div
                style={{
                  border: "1px solid rgba(239, 68, 68, 0.25)",
                  background: "rgba(239, 68, 68, 0.04)",
                  padding: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.6875rem", color: "#f87171" }}>
                    CYBER TRUST SCORE
                  </span>
                  <span style={{ fontSize: "0.6875rem", color: "#f87171", fontWeight: 600 }}>
                    HIGH RISK ALERT
                  </span>
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#f87171", margin: "0.35rem 0" }}>
                  34 <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>/ 100</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>
                  Confidence: 94.2% based on 14 community reports & mule node graph clustering.
                </div>
              </div>

              {/* Signal Breakdown */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                  <span>Graph Node Centrality:</span>
                  <span style={{ color: "#ffffff" }}>0.82 (Cluster Flag)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                  <span>Community Scam Flags:</span>
                  <span style={{ color: "#f87171" }}>14 Verified</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-secondary)" }}>
                  <span>Regional Concentration:</span>
                  <span style={{ color: "#ffffff" }}>Tamil Nadu & Karnataka</span>
                </div>
              </div>

              {/* Pipeline Flow Visualization */}
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--bg-hairline)" }}>
                <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", display: "block", marginBottom: "0.5rem" }}>
                  PIPELINE FLOW:
                </span>
                <div style={{ fontSize: "0.6875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  UPI Input → Graph Engine → Anomaly Scorer → Trust Score & Report
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            SECONDARY PROJECTS: CLEAN EDITORIAL GRID (3 PROJECTS)
            ============================================================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
          className="secondary-projects-grid"
        >
          {/* Project 02: Android Malware Static Analysis */}
          <div
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="mono-tag" style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>
                02 // SECURITY LAB RESEARCH
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.4rem",
                }}
              >
                Android Malware Static Analysis
              </h4>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Automated APK Decompilation & Forensic Triage Pipeline
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Static triage pipeline to inspect Android APK packages without executing untrusted binaries. Audits <code style={{ color: "#ffffff" }}>AndroidManifest.xml</code> for dangerous permissions, disassembled Smali code, and exfiltration endpoints.
              </p>

              <div style={{ marginBottom: "1.25rem" }}>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  KEY FINDINGS & OUTPUTS
                </span>
                <ul style={{ listStyle: "none", fontSize: "0.8125rem", color: "#e4e4e7", lineHeight: 1.6 }}>
                  <li>— Manifest permission & receiver audit</li>
                  <li>— Hardcoded API and certificate signature triage</li>
                  <li>— Forensic log mapping against security event baselines</li>
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {["Python", "Linux", "Bash", "Android Debug Tools", "Log Analysis"].map((t) => (
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

            <div>
              <a
                href="https://github.com/Sharath-B-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link-arrow"
              >
                <span>View Lab Repository on GitHub</span>
                <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>

          {/* Project 03: Explainable Knowledge Gap Detection */}
          <div
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="mono-tag" style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>
                03 // AI / MACHINE LEARNING
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.4rem",
                }}
              >
                Knowledge Gap Detection
              </h4>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Deep Knowledge Tracing & Prerequisite Graphs
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                An AI/ML framework designed to trace student understanding of prerequisite concepts rather than solely grading right or wrong answers. Formulates explainable remediation pathways using Deep Knowledge Tracing.
              </p>

              <div style={{ marginBottom: "1.25rem" }}>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  KEY CAPABILITIES
                </span>
                <ul style={{ listStyle: "none", fontSize: "0.8125rem", color: "#e4e4e7", lineHeight: 1.6 }}>
                  <li>— Prerequisite-aware dependency graph modeling</li>
                  <li>— Sequential knowledge progression tracing</li>
                  <li>— Explainable predictions for targeted review</li>
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {["Python", "NumPy", "Pandas", "Machine Learning", "Explainable AI"].map((t) => (
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

            <div>
              <a
                href="https://github.com/Sharath-B-7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link-arrow"
              >
                <span>View Project on GitHub</span>
                <ArrowUpRight size={12} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>

          {/* Project 04: Security Operations Center (SOC) Training */}
          <div
            style={{
              border: "1px solid var(--bg-hairline)",
              background: "var(--bg-surface)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="mono-tag" style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>
                04 // DEFENSIVE OPERATIONS
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.4rem",
                }}
              >
                Security Operations Center (SOC)
              </h4>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Event Monitoring & Defensive Incident Triage
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Defensive cybersecurity training focused on understanding real-time security operations, log correlation across authentication attempts and network boundaries, and incident response escalation procedures.
              </p>

              <div style={{ marginBottom: "1.25rem" }}>
                <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem" }}>
                  CORE DRILLS
                </span>
                <ul style={{ listStyle: "none", fontSize: "0.8125rem", color: "#e4e4e7", lineHeight: 1.6 }}>
                  <li>— Continuous syslog & firewall event monitoring</li>
                  <li>— Incident lifecycle & evidence preservation</li>
                  <li>— SIEM-style threat timeline reconstruction</li>
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {["SOC Workflows", "SIEM Concepts", "Log Analysis", "Ubuntu Linux"].map((t) => (
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

            <div>
              <span className="mono-tag" style={{ color: "var(--accent-emerald)" }}>
                Verified Practical Training
              </span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-project-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
