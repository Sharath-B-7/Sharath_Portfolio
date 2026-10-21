import React, { useState } from "react";
import { ArrowUpRight, Award, ShieldCheck, CheckCircle2, SlidersHorizontal, Terminal } from "lucide-react";
import { LeetCodeIcon } from "../components/Icons";
import { personalInfo } from "../data/personalInfo";
import { certificationsData } from "../data/certifications";

export const AchievementsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "cert" | "workshop">("all");

  // Filter out the SOC training from the certifications list because it has its own dedicated feature card in Part A
  const credentialsList = certificationsData.filter((c) => c.id !== "elevance-soc");

  const filteredCredentials = credentialsList.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "cert") return item.type === "certification";
    if (activeFilter === "workshop") return item.type === "training";
    return true;
  });

  const dsaDomains = [
    "Arrays & Strings",
    "Two Pointers",
    "Sliding Window",
    "Binary Search",
    "Linked Lists",
    "Trees & BST",
    "Graph Theory (BFS/DFS)",
    "Dynamic Programming",
    "Stack & Queue",
    "Greedy Algorithms",
    "Bit Manipulation",
    "Hash Tables",
  ];

  const socCompetencies = [
    "Live Security Event Monitoring",
    "SIEM & Log Correlation",
    "Defensive Threat Triage",
    "Incident Escalation Workflows",
    "False Positive Filtering",
    "Alert Investigation Protocols",
  ];

  return (
    <section id="achievements" className="editorial-section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: "2.75rem" }}>
          <div className="section-label">05 · Problem Solving &amp; Credentials</div>
          <h2 className="section-heading-editorial">
            Algorithmic Practice &amp; Technical Credentials
          </h2>
          <p className="section-subheading-editorial">
            Continuous problem-solving discipline on LeetCode, hands-on Security Operations Center (SOC) training, and verified technical credentials.
          </p>
        </div>

        {/* PART A: Dedicated Problem Solving & Practical Training Cards */}
        <div className="achieve-split-grid" style={{ marginBottom: "3.5rem" }}>
          
          {/* Card 1: Competitive Algorithmic Practice (LeetCode Feature) */}
          <div
            className="achieve-card-block"
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
              {/* Meta bar */}
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
                <span className="mono-tag" style={{ color: "var(--accent-cyan)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <LeetCodeIcon size={13} color="var(--accent-cyan)" />
                  01 · ALGORITHMIC RIGOR
                </span>
                <a
                  href={personalInfo.social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial-secondary"
                  style={{
                    padding: "0.25rem 0.6rem",
                    fontSize: "0.71875rem",
                    fontFamily: "var(--font-mono)",
                    gap: "0.3rem",
                  }}
                >
                  <span>LeetCode Profile</span>
                  <ArrowUpRight size={11} style={{ opacity: 0.7 }} />
                </a>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                LeetCode Problem Solving
              </h3>

              {/* Prominent Stat */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.5rem, 4.5vw, 3.25rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1,
                  }}
                >
                  450+
                </span>
                <div>
                  <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)", display: "block" }}>
                    Problems Solved
                  </span>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-emerald)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent-emerald)",
                        display: "inline-block",
                      }}
                    />
                    Continuous Practice
                  </span>
                </div>
              </div>

              {/* Narrative */}
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68, marginBottom: "1.5rem" }}>
                Disciplined daily practice focusing on optimal time and space complexity tradeoffs, memory efficiency, and pattern recognition. Routine focus centers on Graph Theory, Dynamic Programming, Tree Traversals, and Two-Pointer strategies to anticipate edge cases across all software architectures.
              </p>
            </div>

            {/* Practice Domains Tag Cloud */}
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
                }}
              >
                Practiced Computational Domains:
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {dsaDomains.map((domain) => (
                  <span
                    key={domain}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.71875rem",
                      color: "var(--text-secondary)",
                      background: "rgba(255, 255, 255, 0.025)",
                      padding: "0.22rem 0.55rem",
                      borderRadius: "4px",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Practical SOC Operations Training */}
          <div
            className="achieve-card-block"
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
              {/* Meta bar */}
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
                <span className="mono-tag" style={{ color: "var(--accent-cyan)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <ShieldCheck size={13} />
                  02 · OPERATIONAL TRAINING
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent-cyan-light)",
                    background: "rgba(6, 182, 212, 0.08)",
                    border: "1px solid var(--accent-cyan-border)",
                    padding: "0.15rem 0.55rem",
                    borderRadius: "4px",
                  }}
                >
                  Practical Training
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
                Real-Time SOC Operations
              </h3>

              {/* Provider */}
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--accent-cyan-light)",
                  fontWeight: 600,
                  marginBottom: "0.45rem",
                }}
              >
                Elevance Skills · Practical Security Training
              </div>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "1.25rem",
                }}
              >
                Hands-on Defensive Security Operations
              </div>

              {/* Narrative */}
              <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.68, marginBottom: "1.5rem" }}>
                Completed specialized hands-on training covering enterprise Security Operations Center (SOC) workflows, focusing on live security event monitoring, log correlation, incident triage, and escalation protocols in corporate environments.
              </p>
            </div>

            {/* Core Competencies Checklist */}
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
                <Terminal size={12} />
                Operational Competencies Acquired:
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.5rem 0.75rem",
                }}
              >
                {socCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-secondary)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.45rem",
                      lineHeight: 1.45,
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: "var(--accent-cyan)", flexShrink: 0, marginTop: "0.15rem" }} />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* PART B: Verified Industry Certifications & Credentials */}
        <div>
          {/* Subheader and Filters */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.75rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <span className="mono-tag" style={{ display: "block", marginBottom: "0.35rem", color: "var(--accent-cyan)" }}>
                VERIFIED CREDENTIALS
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Industry Certifications &amp; Credentials
              </h3>
            </div>

            {/* Filter Pills */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", flexWrap: "wrap" }}>
              <span
                style={{
                  fontSize: "0.71875rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  marginRight: "0.25rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <SlidersHorizontal size={13} />
                Filter:
              </span>
              {[
                { id: "all", label: `All (${credentialsList.length})` },
                { id: "cert", label: "Certifications" },
                { id: "workshop", label: "Workshops" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as "all" | "cert" | "workshop")}
                  style={{
                    background: activeFilter === tab.id ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.025)",
                    border: activeFilter === tab.id ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                    color: activeFilter === tab.id ? "var(--text-primary)" : "var(--text-secondary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    fontWeight: activeFilter === tab.id ? 600 : 500,
                    padding: "0.35rem 0.8rem",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "1.35rem",
            }}
          >
            {filteredCredentials.map((cert) => (
              <div
                key={cert.id}
                className="credential-editorial-card"
                style={{
                  padding: "1.35rem 1.5rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "1rem",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
              >
                <div>
                  {/* Card Meta */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.6rem",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-cyan)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      style={{
                        fontSize: "0.65625rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-subtle)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "4px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        background: "rgba(255, 255, 255, 0.02)",
                      }}
                    >
                      <Award size={11} style={{ color: "var(--accent-cyan)" }} />
                      {cert.badgeLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.35,
                    }}
                  >
                    {cert.title}
                  </h4>

                  {/* Description */}
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.84375rem", lineHeight: 1.6, margin: 0 }}>
                    {cert.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-subtle)",
                  }}
                >
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-secondary)",
                        background: "rgba(255, 255, 255, 0.025)",
                        border: "1px solid var(--border-subtle)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "3px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .achieve-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(1.75rem, 3vw, 2.5rem);
          align-items: stretch;
        }

        .achieve-card-block:hover,
        .credential-editorial-card:hover {
          border-color: var(--border-strong) !important;
        }

        @media (max-width: 960px) {
          .achieve-split-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }

        @media (max-width: 640px) {
          .achieve-card-block {
            padding: 1.25rem 1rem !important;
            border-radius: 8px !important;
          }
          .credential-editorial-card {
            padding: 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};
