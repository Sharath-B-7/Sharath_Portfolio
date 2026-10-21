import React, { useState } from "react";
import { GitBranch, BookOpen, AlertCircle } from "lucide-react";

interface SkillDomain {
  name: string;
  mastery: number;
  status: "Mastered" | "Review Required" | "Prerequisite Gap";
  color: string;
  remediation?: string;
}

const skillDomains: SkillDomain[] = [
  { name: "Linear Algebra", mastery: 88, status: "Mastered", color: "var(--accent-emerald)" },
  { name: "Fraction Arithmetic", mastery: 42, status: "Prerequisite Gap", color: "var(--accent-cyan-light)", remediation: "Khan Academy: Concept 04 Fractions & Step Notes" },
  { name: "Coordinate Geometry", mastery: 58, status: "Review Required", color: "#fbbf24", remediation: "Practice Set: Slope-Intercept & Plane Transformations" },
  { name: "Trigonometry", mastery: 76, status: "Mastered", color: "var(--accent-emerald)" },
  { name: "Differential Calculus", mastery: 71, status: "Mastered", color: "var(--accent-emerald)" },
];

export const EduGapPreview: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<SkillDomain>(skillDomains[1]);
  const [activeTab, setActiveTab] = useState<"domains" | "graph" | "remediation">("domains");

  return (
    <div
      style={{
        border: "1px solid var(--border-default)",
        background: "var(--bg-surface-elevated)",
        borderRadius: "8px",
        padding: "clamp(1.15rem, 2vw, 1.5rem)",
        fontFamily: "var(--font-mono)",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
    >
      {/* Telemetry Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "0.75rem",
          borderBottom: "1px solid var(--border-subtle)",
          fontSize: "0.71875rem",
          color: "var(--text-muted)",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        <span style={{ letterSpacing: "0.04em" }}>EDUGAP AI · DKT DIAGNOSTIC ENGINE</span>
        <span style={{ color: "var(--accent-cyan-light)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent-emerald)",
              display: "inline-block",
            }}
          />
          XGBOOST + LSTM READY
        </span>
      </div>

      {/* Session Banner */}
      <div
        style={{
          padding: "0.55rem 0.75rem",
          background: "rgba(255, 255, 255, 0.025)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.78125rem",
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "var(--text-primary)" }}>
          SESSION: #CIT-2026-CS88 · Mathematics Diagnostic
        </span>
        <span style={{ fontSize: "0.6875rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
          ACCURACY: 92.4%
        </span>
      </div>

      {/* Navigation Sub-Tabs */}
      <div
        style={{
          display: "flex",
          gap: "0.35rem",
          borderBottom: "1px solid var(--border-subtle)",
          paddingBottom: "0.5rem",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab("domains")}
          style={{
            background: "transparent",
            border: "none",
            color: activeTab === "domains" ? "var(--accent-cyan)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.2rem 0.4rem",
            borderBottom: activeTab === "domains" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
          }}
        >
          <BookOpen size={13} />
          <span>Skill Matrix</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("graph")}
          style={{
            background: "transparent",
            border: "none",
            color: activeTab === "graph" ? "var(--accent-cyan)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.2rem 0.4rem",
            borderBottom: activeTab === "graph" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
          }}
        >
          <GitBranch size={13} />
          <span>Prerequisite Graph</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("remediation")}
          style={{
            background: "transparent",
            border: "none",
            color: activeTab === "remediation" ? "var(--accent-cyan)" : "var(--text-muted)",
            fontSize: "0.71875rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.2rem 0.4rem",
            borderBottom: activeTab === "remediation" ? "2px solid var(--accent-cyan)" : "2px solid transparent",
          }}
        >
          <AlertCircle size={13} />
          <span>Remediation Plan</span>
        </button>
      </div>

      {/* TAB 1: Skill Domains Breakdown */}
      {activeTab === "domains" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {skillDomains.map((skill, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDomain(skill)}
              style={{
                border: selectedDomain.name === skill.name ? "1px solid var(--accent-cyan-border)" : "1px solid var(--border-subtle)",
                background: selectedDomain.name === skill.name ? "var(--accent-cyan-subtle)" : "rgba(255, 255, 255, 0.02)",
                borderRadius: "4px",
                padding: "0.55rem 0.75rem",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                <span style={{ fontSize: "0.71875rem", color: "var(--text-primary)", fontWeight: 500 }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: "0.6875rem", color: skill.color, fontWeight: 600 }}>
                  {skill.mastery}% · {skill.status}
                </span>
              </div>
              {/* Progress track */}
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${skill.mastery}%`,
                    height: "100%",
                    background: skill.color,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Prerequisite Graph Visualizer */}
      {activeTab === "graph" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "160px",
              background: "rgba(10, 14, 22, 0.9)",
              border: "1px solid var(--border-default)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 320 160">
              {/* Edges */}
              <line x1="60" y1="80" x2="160" y2="45" stroke="rgba(255, 255, 255, 0.15)" strokeWidth={1.5} />
              <line x1="60" y1="80" x2="160" y2="115" stroke="var(--accent-cyan)" strokeWidth={2} strokeDasharray="4 2" />
              <line x1="160" y1="45" x2="260" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth={1.5} />
              <line x1="160" y1="115" x2="260" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth={1.5} />

              {/* Node 1: Fractions (Prereq root) */}
              <circle cx="60" cy="80" r="14" fill="var(--accent-cyan-subtle)" stroke="var(--accent-cyan)" strokeWidth={2} />
              <text x="60" y="84" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="var(--font-mono)">
                Fractions
              </text>
              <text x="60" y="103" textAnchor="middle" fill="var(--accent-cyan-light)" fontSize="7" fontFamily="var(--font-mono)">
                42% [GAP]
              </text>

              {/* Node 2: Linear Equations */}
              <circle cx="160" cy="45" r="13" fill="rgba(16, 185, 129, 0.15)" stroke="var(--accent-emerald)" strokeWidth={1.5} />
              <text x="160" y="49" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="var(--font-mono)">
                Algebra
              </text>

              {/* Node 3: Coordinate Geo */}
              <circle cx="160" cy="115" r="13" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" strokeWidth={1.5} />
              <text x="160" y="119" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="var(--font-mono)">
                Geometry
              </text>
              <text x="160" y="137" textAnchor="middle" fill="#fbbf24" fontSize="7" fontFamily="var(--font-mono)">
                58%
              </text>

              {/* Node 4: Trigonometry */}
              <circle cx="260" cy="80" r="13" fill="rgba(16, 185, 129, 0.15)" stroke="var(--accent-emerald)" strokeWidth={1.5} />
              <text x="260" y="84" textAnchor="middle" fill="var(--text-primary)" fontSize="8" fontFamily="var(--font-mono)">
                Trig
              </text>
            </svg>
          </div>

          <div style={{ fontSize: "0.6875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
            Dashed link highlights how deficient Fraction Arithmetic propagates cognitive friction directly into downstream Coordinate Geometry calculations.
          </div>
        </div>
      )}

      {/* TAB 3: Remediation Plan */}
      {activeTab === "remediation" && (
        <div
          style={{
            padding: "0.85rem",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border-default)",
            borderRadius: "6px",
            fontSize: "0.71875rem",
            lineHeight: 1.6,
            color: "var(--text-secondary)",
          }}
        >
          <div style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.4rem" }}>
            Recommended Intervention for Selected Domain:
          </div>
          <div style={{ color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>
            {selectedDomain.name} (Score: {selectedDomain.mastery}%)
          </div>
          <div>{selectedDomain.remediation || "Mastery benchmark achieved (≥70%). Ready for advanced prerequisite-linked problem sets."}</div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "0.65rem",
          fontSize: "0.65625rem",
          color: "var(--text-muted)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.35rem",
        }}
      >
        <span>Research Prototype · Deep Knowledge Tracing</span>
        <span>PyTorch + XGBoost</span>
      </div>
    </div>
  );
};
