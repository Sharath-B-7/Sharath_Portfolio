import React from "react";
import { Code2, ExternalLink, BrainCircuit, CheckCircle2 } from "lucide-react";
import { dsaTopics } from "../data/exploring";
import { personalInfo } from "../data/personalInfo";

export const ProblemSolvingSection: React.FC = () => {
  return (
    <section id="problem-solving" className="section" style={{ background: "rgba(11, 17, 32, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BrainCircuit size={14} />
            <span>Algorithmic Mastery & Rigor</span>
          </div>
          <h2 className="section-title">
            Problem Solving & <span>LeetCode</span>
          </h2>
          <p className="section-subtitle">
            Consistent algorithmic practice focused on asymptotic efficiency, structured data manipulation, and resilient debugging.
          </p>
        </div>

        {/* Highlight Card */}
        <div
          className="glass-card dsa-grid"
          style={{
            padding: "clamp(2rem, 4vw, 3rem)",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Big Stat & Statement */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ display: "inline-flex" }}>
              <span className="cyber-badge green">
                <CheckCircle2 size={13} />
                <span>Verified Solved Count</span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(3.5rem, 6vw, 5rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #ffffff 30%, var(--cyan-primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                450+
              </div>
              <div>
                <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f8fafc" }}>
                  LeetCode Problems Solved
                </div>
                <div style={{ fontSize: "0.875rem", color: "var(--cyan-muted)", fontFamily: "var(--font-mono)" }}>
                  Continuous DSA Practice
                </div>
              </div>
            </div>

            <p style={{ color: "#cbd5e1", fontSize: "1.0625rem", lineHeight: 1.7 }}>
              «I regularly practice Data Structures and Algorithms to improve logical thinking, coding ability and problem-solving skills.»
            </p>

            <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.6 }}>
              Rather than viewing DSA as an isolated interview exercise, I use algorithmic problem solving to refine code execution speed, edge-case anticipation, and memory management across all software projects.
            </p>

            {/* Profile CTA */}
            <div style={{ paddingTop: "0.5rem" }}>
              <a
                href={personalInfo.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: "inline-flex" }}
              >
                <Code2 size={18} />
                <span>View LeetCode Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Topics Grid */}
          <div
            style={{
              padding: "1.75rem",
              borderRadius: "14px",
              background: "rgba(7, 10, 19, 0.75)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div
              style={{
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                marginBottom: "1rem",
              }}
            >
              Mastered & Practiced Problem Domains:
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {dsaTopics.map((topic, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.45rem 0.85rem",
                    borderRadius: "8px",
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid var(--border-subtle)",
                    color: "#e2e8f0",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-mono)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--cyan-primary)";
                    e.currentTarget.style.color = "var(--cyan-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "#e2e8f0";
                  }}
                >
                  {topic}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                paddingTop: "0.75rem",
              }}
            >
              // Verified via @Sharathbcs profile — no fabricated contest rankings or win statistics.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .dsa-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
